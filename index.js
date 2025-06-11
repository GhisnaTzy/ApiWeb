require("dotenv").config();
const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const MODEL = "bigscience/bloom-560m"; // Model gratis dari Hugging Face

// ✅ 1. Serve file statis (HTML, CSS, JS, img)
app.use(express.static(path.join(__dirname, "public")));

// ✅ 2. Endpoint REST API
app.get("/api/chat", async (req, res) => {
  const input = req.query.message;
  if (!input) {
    return res.status(400).json({ error: "Gunakan query ?message=..." });
  }

  try {
    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${MODEL}`,
      { inputs: input },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    const reply =
      typeof response.data === "string"
        ? response.data
        : response.data[0]?.generated_text || "No response";

    res.json({ reply });
  } catch (err) {
    console.error("HuggingFace API Error:", err.response?.data || err.message);
    res.status(500).json({
      error: err.response?.data?.error || "Gagal koneksi ke Hugging Face",
    });
  }
});

// ✅ 3. Fallback untuk semua route → arahkan ke index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ 4. Jalankan server
app.listen(PORT, () => {
  console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});
