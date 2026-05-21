const express = require("express");

const {
  createPost,
  getPosts,
  likePost,
  viewPost,
  addComment,
  searchPosts,
} = require("../controllers/postController");

const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post(
  "/",
  upload.single("image"),
  createPost
);

router.get("/", getPosts);
router.put("/:id/like", likePost);
router.put("/:id/view", viewPost);
router.post("/:id/comment", addComment);
router.get("/search", searchPosts);

module.exports = router;