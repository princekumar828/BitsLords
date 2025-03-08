import express from "express";
import {
  createPost,
  getAllPosts,
  getMyPosts,
  updatePost,
  likePost,
  deletePost,
} from "../controllers/postController.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// Public Route: Get all posts
router.get("/", getAllPosts);

// Private Routes: Only logged-in users can access
router.post("/", protect, upload.single("media"), createPost); // Create a post
router.get("/myposts", protect, getMyPosts); // Get only logged-in user's posts
router.put("/:id", protect, updatePost); // Update a post (only owner)
router.delete("/:id", protect, deletePost); // Delete a post (only owner)
router.put("/:id/like", protect, likePost)

export default router;

