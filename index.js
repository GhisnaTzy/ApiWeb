require("dotenv").config();
const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const gpt3 = require("./restapi/ai/gpt3");


// Halaman utama
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/api", express.static(path.join(__dirname, "api")));

// index
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/api", (req, res) => {
  res.sendFile(path.join(__dirname, "public_api", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server aktif di http://localhost:${PORT}`);
});