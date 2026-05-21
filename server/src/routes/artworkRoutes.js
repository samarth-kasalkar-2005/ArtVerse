const express = require("express");

const Artwork = require("../models/Artwork");

const {
  createArtwork,
  getArtworks,
} = require("../controllers/artworkController");

const upload = require("../middleware/uploadMiddleware");

const router = express.Router();


// CREATE
router.post(
  "/",
  upload.single("image"),
  createArtwork
);

// GET ALL
router.get("/", getArtworks);

router.get("/artist/:artist", async (req, res) => {

    router.get("/search/:query", async (req, res) => {

        try {

            const query = req.params.query;

            const artworks = await Artwork.find({
            $or: [
                {
                title: {
                    $regex: query,
                    $options: "i",
                },
                },

                {
                artist: {
                    $regex: query,
                    $options: "i",
                },
                },
            ],
            });

            res.status(200).json(artworks);

        } catch (error) {

            res.status(500).json({
            message: "Search failed",
            });
        }
        });
  try {

    const artworks = await Artwork.find({
      artist: req.params.artist,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json(artworks);

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch artworks",
    });
  }
});

router.put("/like/:id", async (req, res) => {

  try {

    const artwork = await Artwork.findById(
      req.params.id
    );

    artwork.likes += 1;

    await artwork.save();

    res.status(200).json({
      message: "Artwork liked",
      likes: artwork.likes,
    });

  } catch (error) {

    res.status(500).json({
      message: "Like failed",
    });
  }
});

router.post("/comment/:id", async (req, res) => {

  try {

    const { username, text } = req.body;

    const artwork = await Artwork.findById(
      req.params.id
    );

    artwork.comments.push({
      username,
      text,
    });

    await artwork.save();

    res.status(200).json({
      message: "Comment added",
    });

  } catch (error) {

    res.status(500).json({
      message: "Comment failed",
    });
  }
});

module.exports = router;