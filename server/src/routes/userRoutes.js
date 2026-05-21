const express = require("express");

const {
  followUser,
} = require("../controllers/userController");

const router = express.Router();

router.put(
  "/follow",
  followUser
);

module.exports = router;