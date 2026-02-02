const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB-yhteys
const MongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};

MongoDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Backend käynnissä: http://localhost:5000");
    console.log("CORS: http://localhost:5173");
  });
});

// malli
const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  done: { type: Boolean, default: false },
});

const Todo = mongoose.model("Todo", todoSchema);

// reitit

// terveys
app.get("/api/health", (req, res) => {
  res.send("API toimii!");
});

// haku
app.get("/api/todos", async (req, res) => {
  const tehtavat = await Todo.find({});
  res.json(tehtavat);
});

// luonti
app.post("/api/todos", async (req, res) => {
  const uusiTehtava = new Todo({ text: req.body.text });
  const saved = await uusiTehtava.save();
  res.status(201).json(saved);
});

app.patch("/api/todos/:id", async (req, res) => {
  const update = {};

  if (typeof req.body.done === "boolean") {
    update.done = req.body.done;
  }

  if (typeof req.body.text === "string") {
    update.text = req.body.text;
  }

  const updated = await Todo.findByIdAndUpdate(
    req.params.id,
    update,
    { new: true }
  );

  res.json(updated);
});

// poisto
app.delete("/api/todos/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.status(204).end();
});
