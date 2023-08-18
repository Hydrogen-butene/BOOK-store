const express = require("express")
const router = express.Router()
const Book = require("../modal/Book.js");
const booksControllers = require("../controllers/book-controller.js");

router.get("/", booksControllers.getAllBooks)
router.post("/", booksControllers.addBook)
router.get("/:id", booksControllers.getById)
router.put("/:id",booksControllers.updateBook)
router.delete("/:id",booksControllers.deleteBook)

module.exports = router;