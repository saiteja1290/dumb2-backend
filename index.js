import express, { response } from "express";
import { PORT } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import { Book } from "./models/bookmodel.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
//express
const app = express();
// const cors = require('cors');
app.use(express.json());
//CORS Policy
// app.use(cors())

const allowedOrigins = [
    "https://dumbproject-api.vercel.app",
    "https://teja-frontend.vercel.app",
    "https://teja-coder.vercel.app/", // Add your additional allowed origins here
    "http://localhost:5173", // Add other origins as needed
];

app.use(
    cors({
        // origin: "https://dumbproject-api.vercel.app",
        origin: allowedOrigins,
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
app.get("/", (req, res) => {
    console.log(req);
    return res.status(200).send("Welcome to MERN stack Project");
});

app.use("/books", booksRoute);

//Route to save a new book

//Mongoose

// console.log(mongourl);
const mongourl = process.env.mongourl
mongoose
    .connect(mongourl)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
