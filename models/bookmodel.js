import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        username: { type: String, required: true },
        branch: { type: String, required: true },
        overall_rank: { type: Number, required: true },
        branch_rank: { type: Number, required: true },
        rating: { type: Number, required: true }
    },
    {
        timestamps: true,
    }
)

export const Book = mongoose.model('Cat', bookSchema);