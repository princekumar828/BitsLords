import asyncHandler from "express-async-handler";
import Post from "../models/Post.js";

// @desc    Create a new post
// @route   POST /api/posts
// @access  Private (Only logged-in users)

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const mediaPath = req.file ? `/uploads/${req.file.filename}` : null; // Store relative path

    const newPost = new Post({
      title,
      content,
      user : req.user.id,
      mediaUrl: mediaPath, // Store media path
    });

    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// @desc    Get all posts (Public)
// @route   GET /api/posts
// @access  Public
const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().populate("user", "name email"); // Populate user details
  res.json(posts);
});

// @desc    Get logged-in user's posts
// @route   GET /api/posts/myposts
// @access  Private (Only logged-in user)
const getMyPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ user: req.user._id });
  res.json(posts);
});

// @desc    Update a post
// @route   PUT /api/posts/:id
// @access  Private (Only the owner)
const updatePost = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }

  if (post.user.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("You are not authorized to edit this post");
  }

  post.title = title || post.title;
  post.content = content || post.content;
  const updatedPost = await post.save();

  res.json(updatedPost);
});

// @desc    Delete a post
// @route   DELETE /api/posts/:id
// @access  Private (Only the owner)
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }

  if (post.user.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("You are not authorized to delete this post");
  }

  await post.deleteOne();
  res.json({ message: "Post deleted successfully" });
});


// @desc Liek post
// @route 
// access Private

const likePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }

  if (post.likes.includes(req.user._id)) {
    post.likes = post.likes.filter(
      (id) => id.toString() !== req.user._id.toString()
    );
    res.json({ message: "Post unliked" });
  } else {
    post.likes.push(req.user._id);
    res.json({ message: "Post liked" });
  }

  await post.save();
});


export { createPost, getAllPosts, getMyPosts, updatePost, deletePost, likePost };
