import asyncHandler from "express-async-handler";
import Post from "../models/Post.js";

// @desc    Create a new post
// @route   POST /api/posts
// @access  Private (Only logged-in users)
const createPost = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    res.status(400);
    throw new Error("Title and content are required");
  }

  const post = await Post.create({
    user: req.user._id, // Logged-in user
    title,
    content,
  });

  res.status(201).json(post);
});

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

export { createPost, getAllPosts, getMyPosts, updatePost, deletePost };
