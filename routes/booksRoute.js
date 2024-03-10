import express from "express";
import { Book } from "../models/bookmodel.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        if (
            !req.body.username ||
            !req.body.branch ||
            !req.body.overall_rank ||
            !req.body.branch_rank ||
            !req.body.rating
        ) {
            return res.status(400).json({
                message: "Send all required fields",
            });
        }
        const newBook = {
            username: req.body.username,
            branch: req.body.branch,
            overall_rank: req.body.overall_rank,
            branch_rank: req.body.branch_rank,
            rating: req.body.rating,
        };
        const book = await Book.create(newBook);
        return res.status(201).json(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        return res.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        if (
            !req.body.username ||
            !req.body.branch ||
            !req.body.overall_rank ||
            !req.body.branch_rank ||
            !req.body.rating
        ) {
            return res.status(400).json({
                message: "Send all required fields",
            });
        }
        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if (!result) {
            return res.status(404).json({ message: "Book not found" });
        }
        return res.status(200).json({ message: "Book updated successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: "Book not found" });
        }
        return res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

export default router;
