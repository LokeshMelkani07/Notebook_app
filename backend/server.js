const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello to the homepage");
  console.log(notes);
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((e) => e._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is listened at port ${PORT}`));
