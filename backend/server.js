// Import necessary modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Link = require("./models/links"); // Import your Link model
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Define routes

// GET /links endpoint to fetch all links
app.get('/links', async (req, res) => {
  try {
    const links = await Link.find();
    res.json(links);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /links endpoint to add a new link
app.post('/links', async (req, res) => {
  const newLink = new Link(req.body);

  try {
    await newLink.save();
    res.status(201).json(newLink);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /links/:id endpoint to delete a link
app.delete('/links/:id', async (req, res) => {
  try {
    const result = await Link.findByIdAndDelete(req.params.id);
    if (result == null) {
      return res.status(404).json({ message: 'Cannot find link' });
    }

    res.json({ message: 'Deleted link' });
  } catch (err) {
    console.error(err); // Log the error message to the console
    return res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});