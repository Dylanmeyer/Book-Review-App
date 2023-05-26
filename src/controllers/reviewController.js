const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await prisma.review.findMany();
    res.json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getReviewById = async (req, res) => {
  const reviewId = parseInt(req.params.id);
  try {
    const review = await prisma.review.findUnique({ where: { id: reviewId } });
    if (review) {
      res.json(review);
    } else {
      res.status(404).json({ error: "Review not found" });
    }
  } catch (error) {
    console.error("Error fetching review:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.createReview = async (req, res) => {
  const { bookId, rating, comment } = req.body;
  try {
    const review = await prisma.review.create({
      data: { bookId, rating, comment },
    });
    res.json(review);
  } catch (error) {
    console.error("Error creating review:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
