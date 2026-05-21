const mongoose = require("mongoose");

const artworkSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      required: true,
    },

    artist: {
      type: String,
      required: true,
    },

    likes: {
      type: Number,
      default: 0,
    },

    views: {
      type: Number,
      default: 0,
    },

    comments: [
        {
            username: String,
            text: String,
            createdAt: {
            type: Date,
            default: Date.now,
            },
        },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Artwork",
  artworkSchema
);