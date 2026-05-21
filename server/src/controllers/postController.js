const Post = require("../models/Post");


// CREATE POST
const createPost = async (req, res) => {

  try {

    console.log(req.body);
    console.log(req.file);

    const post = await Post.create({

      title: req.body.title,

      description: req.body.description,

      tags: req.body.tags,

      artist: req.body.artist,

      premium: req.body.premium,

      price: req.body.price,

      image: req.file.path,

      user: req.body.userId,

    });

    res.status(201).json({
      message: "Artwork uploaded successfully 🚀",
      post,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Upload failed ❌",
    });
  }
};


// GET POSTS
const getPosts = async (req, res) => {

  try {

    const posts = await Post.find().sort({
      createdAt: -1,
    });

    res.status(200).json(posts);

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// LIKE POST
const likePost = async (req, res) => {

  try {

    const post = await Post.findById(
      req.params.id
    );

    if (!post) {

      return res.status(404).json({
        message: "Post not found",
      });
    }

    post.likes += 1;

    await post.save();

    res.status(200).json({
      message: "Post liked ❤️",
      likes: post.likes,
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// VIEW POST
const viewPost = async (req, res) => {

  try {

    const post = await Post.findById(
      req.params.id
    );

    if (!post) {

      return res.status(404).json({
        message: "Post not found",
      });
    }

    post.views += 1;

    await post.save();

    res.status(200).json({
      views: post.views,
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// ADD COMMENT
const addComment = async (req, res) => {

  try {

    const post = await Post.findById(
      req.params.id
    );

    if (!post) {

      return res.status(404).json({
        message: "Post not found",
      });
    }

    const {
      username,
      text,
    } = req.body;

    post.comments.push({
      username,
      text,
    });

    await post.save();

    res.status(200).json({
      message: "Comment added 💬",
      comments: post.comments,
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// SEARCH POSTS
const searchPosts = async (req, res) => {

  try {

    const query = req.query.q;

    const posts = await Post.find({

      $or: [

        {
          title: {
            $regex: query,
            $options: "i",
          },
        },

        {
          tags: {
            $regex: query,
            $options: "i",
          },
        },

      ],
    });

    res.status(200).json(posts);

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  createPost,
  getPosts,
  likePost,
  viewPost,
  addComment,
  searchPosts,
};