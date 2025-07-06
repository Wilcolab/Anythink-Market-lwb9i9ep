
/**
 * Express router for handling comment-related API endpoints.
 * 
 * @module routes/api/comments
 */

 /**
  * GET /
  * Retrieves all comments, sorted by creation date (descending).
  * 
  * @route GET /api/comments
  * @group Comments - Operations about comments
  * @returns {Array.<Comment>} 200 - An array of comment objects
  * @returns {object} 500 - Error message
  */

 /**
  * GET /:id
  * Retrieves all comments (Note: the :id parameter is not used in this handler).
  * 
  * @route GET /api/comments/:id
  * @group Comments - Operations about comments
  * @returns {Array.<Comment>} 200 - An array of comment objects
  * @returns {object} 500 - Error message
  */

 /**
  * DELETE /:id
  * Deletes a comment by its ID.
  * 
  * @route DELETE /api/comments/:id
  * @group Comments - Operations about comments
  * @param {string} id.path.required - The ID of the comment to delete
  * @returns {object} 200 - Success message
  * @returns {object} 404 - Error message if comment not found
  * @returns {object} 500 - Error message
  */
const router = require("express").Router();
const { Router } = require("express");
const mongoose = require("mongoose");
const express = require("express");
const Comment = mongoose.model("Comment");

module.exports = router;
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
}); 

//// Get all comments
router.get("/:id", async (req, res) => {
  Comment.find()
  .then((comments) => {
    res.status(200).json(comments);
  })
  .catch((error) => {
    res.status(500).json({ error: "Failed to fetch comments" });
  });
}); 

//// Delete a comment by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await Comment.findByIdAndDelete(id);
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
});