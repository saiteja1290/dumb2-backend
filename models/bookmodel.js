import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        username: { type: String, required: true },
        branch: { type: String, required: true },
        rank: { type: Number, required: true }
    },
    {
        timestamps: true,
    }
)

export const Book = mongoose.model('cats', bookSchema);