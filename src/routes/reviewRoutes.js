const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

// Review routes
router.get("/reviews", reviewController.getAllReviews);
router.get("/reviews/:id", reviewController.getReviewById);
router.post("/reviews", reviewController.createReview);

module.exports = router;
