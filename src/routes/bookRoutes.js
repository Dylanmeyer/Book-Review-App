const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

// Book routes
router.get("/books", bookController.getAllBooks);
router.get("/books/:id", bookController.getBookById);
router.post("/books", bookController.createBook);

module.exports = router;
