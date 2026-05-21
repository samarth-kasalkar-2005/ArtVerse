const Artwork = require("../models/Artwork");


// CREATE ARTWORK
const createArtwork = async (req, res) => {

  try {

    const { title, description, artist } =
      req.body;

    const artwork = await Artwork.create({
      title,
      description,
      artist,
      image: req.file.filename,
    });

    res.status(201).json({
      message: "Artwork uploaded",
      artwork,
    });

  } catch (error) {

    res.status(500).json({
      message: "Upload failed",
    });
  }
};


// GET ALL ARTWORKS
const getArtworks = async (req, res) => {

  try {

    const artworks = await Artwork.find().sort({
      createdAt: -1,
    });

    res.status(200).json(artworks);

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch artworks",
    });
  }
};

module.exports = {
  createArtwork,
  getArtworks,
};