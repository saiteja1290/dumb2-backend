import mongoose from "mongoose";

const registration_model = mongoose.Schema(
    {
        username: { type: String, required: true },
        branch: { type: String, required: true },
        contest: { type: Number, required: true },
        rank: { type: Number, required: true }
    },
    {
        timestamps: true,
    }
)

export const regis = mongoose.model('students_registered', registration_model);