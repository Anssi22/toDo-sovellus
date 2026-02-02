const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const MongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1);
    }
}

MongoDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Backend käynnissä: http://localhost:5000");
        console.log("CORS: http://localhost:5173");
    });
});

// malli
const todoSchema = new mongoose.Schema({
    text: { type: String, required: true },
// reitit
app.get("/api/health", (req, res) => {
    res.send("API toimii!");
})


