require("dotenv").config();
const express = require("express");
const fs = require("fs");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

//const game
const data1 = JSON.parse(fs.readFileSync("./game/asahotak.json", "utf-8"));
const data2 = JSON.parse(fs.readFileSync("./game/caklontong.json", "utf-8"));
const data3 = JSON.parse(fs.readFileSync("./game/family100.json", "utf-8"));
const data4 = JSON.parse(fs.readFileSync("./game/lengkapikalimat.json", "utf-8"));
const data5 = JSON.parse(fs.readFileSync("./game/siapakahaku.json", "utf-8"));
const data6 = JSON.parse(fs.readFileSync("./game/susunkata.json", "utf-8"));
const data7 = JSON.parse(fs.readFileSync("./game/tebakbendera.json", "utf-8"));
const data8 = JSON.parse(fs.readFileSync("./game/tebakgabut.json", "utf-8"));
const data9 = JSON.parse(fs.readFileSync("./game/tebakgambar.json", "utf-8"));
const data10 = JSON.parse(fs.readFileSync("./game/tebakgame.json", "utf-8"));
const data11 = JSON.parse(fs.readFileSync("./game/tebakheroml.json", "utf-8"));
const data12 = JSON.parse(fs.readFileSync("./game/tebakkabupaten.json", "utf-8"));
const data13 = JSON.parse(fs.readFileSync("./game/tebakkalimat.json", "utf-8"));
const data14 = JSON.parse(fs.readFileSync("./game/tebakkata.json", "utf-8"));
const data15 = JSON.parse(fs.readFileSync("./game/tebakkimia.json", "utf-8"));
const data16 = JSON.parse(fs.readFileSync("./game/tebakkpop.json", "utf-8"));
const data17 = JSON.parse(fs.readFileSync("./game/tebaklagu.json", "utf-8"));
const data18 = JSON.parse(fs.readFileSync("./game/tebaklogo.json", "utf-8"));
const data19 = JSON.parse(fs.readFileSync("./game/tebaklucu.json", "utf-8"));
const data20 = JSON.parse(fs.readFileSync("./game/tebaklucu.json", "utf-8"));
const data21 = JSON.parse(fs.readFileSync("./game/tebaktebakan.json", "utf-8"));
const data22 = JSON.parse(fs.readFileSync("./game/tekateki.json", "utf-8"));


// Fungsi acak (pickRandom)
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Halaman utama di root domain
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/api", express.static(path.join(__dirname, "api")));

// API Ai
app.get("/api/ai/gpt3", async (req, res) => {
  const prompt = req.query.prompt;
  const message = req.query.message;

  if (!prompt || !message) {
    return res.status(400).json({
      error: "Parameter ?prompt= dan ?message= wajib diisi"
    });
  }

  try {
    const response = await axios.get("https://api.siputzx.my.id/api/ai/gpt3", {
      params: {
        prompt: prompt,
        content: message
      }
    });

    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(response.data, null, 2));
  } catch (err) {
    console.error("API Error:", err.response?.data || err.message);
    res.status(500).json({ error: "Gagal memproses permintaan ke API" });
  }
});

app.get("/api/ai/gemini", async (req, res) => {
  const message = req.query.message;

  if (!message) {
    return res.status(400).json({
      error: "Parameter ?message= wajib diisi"
    });
  }

  try {
    const response = await axios.get("https://api.siputzx.my.id/ai/gemini", {
      params: {
        content: message
      }
    });

    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(response.data, null, 2));
  } catch (err) {
    console.error("API Error:", err.response?.data || err.message);
    res.status(500).json({ error: "Gagal memproses permintaan ke API" });
  }
});

app.get("/api/ai/deepseek", async (req, res) => {
  const message = req.query.message;

  if (!message) {
    return res.status(400).json({
      error: "Parameter ?message= wajib diisi"
    });
  }

  try {
    const response = await axios.get("https://api.siputzx.my.id/api/ai/deepseek-llm-67b-chat", {
      params: {
        content: message
      }
    });

    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(response.data, null, 2));
  } catch (err) {
    console.error("API Error:", err.response?.data || err.message);
    res.status(500).json({ error: "Gagal memproses permintaan ke API" });
  }
});

app.get("/api/ai/llama", async (req, res) => {
  const message = req.query.message;

  if (!message) {
    return res.status(400).json({
      error: "Parameter ?message= wajib diisi"
    });
  }

  try {
    const response = await axios.get("https://api.siputzx.my.id/api/ai/meta-llama-33-70B-instruct-turbo", {
      params: {
        content: message
      }
    });

    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(response.data, null, 2));
  } catch (err) {
    console.error("API Error:", err.response?.data || err.message);
    res.status(500).json({ error: "Gagal memproses permintaan ke API" });
  }
});

app.get("/api/ai/blackbox", async (req, res) => {
  const message = req.query.message;

  if (!message) {
    return res.status(400).json({
      error: "Parameter ?message= wajib diisi"
    });
  }

  try {
    const response = await axios.get("https://api.siputzx.my.id/api/ai/blackboxai", {
      params: {
        content: message
      }
    });

    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(response.data, null, 2));
  } catch (err) {
    console.error("API Error:", err.response?.data || err.message);
    res.status(500).json({ error: "Gagal memproses permintaan ke API" });
  }
});

// API Game
app.get("/api/game/asahotak", (req, res) => {
  const result = pickRandom(data1);
  res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result, null, 2));
});
app.get("/api/game/caklontong", (req, res) => {
  const result = pickRandom(data2);
  res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result, null, 2));
});
app.get("/api/game/family100", (req, res) => {
  const result = pickRandom(data3);
  res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result, null, 2));
});
app.get("/api/game/lengkapikalimat", (req, res) => {
  const result = pickRandom(data4);
  res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result, null, 2));
});
app.get("/api/game/siapakahaku", (req, res) => {
  const result = pickRandom(data5);
  res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result, null, 2));
});
app.get("/api/game/susunkata", (req, res) => {
  const result = pickRandom(data6);
  res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result, null, 2));
});
app.get("/api/game/tebakbendera", (req, res) => {
  const result = pickRandom(data7);
  res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result, null, 2));
});
app.get("/api/game/tebakgabut", (req, res) => {
  const result = pickRandom(data8);
  res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result, null, 2));
});
app.get("/api/game/tebakgambar", (req, res) => {
  const result = pickRandom(data9);
  res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result, null, 2));
});
app.get("/api/game/tebakgame", (req, res) => {
  const result = pickRandom(data10);
  res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result, null, 2));
});
app.get("/api/game/tebakheroml", (req, res) => {
  const result = pickRandom(data11);
  res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result, null, 2));
});
app.get("/api/game/tebakkabupaten", (req, res) => {
  const result = pickRandom(data12);
  res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result, null, 2));
});
app.get("/api/game/tebakkalimat", (req, res) => {
  const result = pickRandom(data13);
  res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result, null, 2));
});
app.get("/api/game/tebakkata", (req, res) => {
  const result = pickRandom(data14);
  res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result, null, 2));
});
app.get("/api/game/tebakkimia", (req, res) => {
  const result = pickRandom(data15);
  res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result, null, 2));
});
app.get("/api/game/tebakkpop", (req, res) => {
  const result = pickRandom(data16);
  res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result, null, 2));
});
app.get("/api/game/tebaklagu", (req, res) => {
  const result = pickRandom(data17);
  res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result, null, 2));
});
app.get("/api/game/tebaklirik", (req, res) => {
  const result = pickRandom(data18);
  res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result, null, 2));
});
app.get("/api/game/tebaklogo", (req, res) => {
  const result = pickRandom(data19);
  res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result, null, 2));
});
app.get("/api/game/tebaktebakan", (req, res) => {
  const result = pickRandom(data20);
  res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result, null, 2));
});
app.get("/api/game/tekateki", (req, res) => {
  const result = pickRandom(data21);
  res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result, null, 2));
});

// Fallback ke masing-masing index.html
app.get("/api", (req, res) => {
  res.sendFile(path.join(__dirname, "public_api", "index.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server aktif di http://localhost:${PORT}`);
});