require("dotenv").config();
const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const gpt3 = require("./restapi/ai/gpt3");

//game
const asahotak = require("./restapi/game/asahotak.js");
const caklontong = require("./restapi/game/caklontong.js");
const family100 = require("./restapi/game/family100.js");
const lengkapikalimat = require("./restapi/game/lengkapikalimat.js");
const siapakahaku = require("./restapi/game/siapakahaku.js");
const susunkata = require("./restapi/game/susunkata.js");
const tebakbendera = require("./restapi/game/tebakbendera.js");
const tebakgabut = require("./restapi/game/tebakgabut.js");
const tebakgambar = require("./restapi/game/tebakgambar.js");
const tebakgame = require("./restapi/game/tebakgame.js");
const tebakheroml = require("./restapi/game/tebakheroml.js");
const tebakkabupaten = require("./restapi/game/tebakkabupaten.js");
const tebakkalimat = require("./restapi/game/tebakkalimat.js");
const tebakkata = require("./restapi/game/tebakkata.js");
const tebakkimia = require("./restapi/game/tebakkimia.js");
const tebakkpop = require("./restapi/game/tebakkpop.js");
const tebaklagu = require("./restapi/game/tebaklagu.js");
const tebaklirik = require("./restapi/game/tebaklirik.js");
const tebaklogo = require("./restapi/game/tebaklogo.js");
const tebaklucu = require("./restapi/game/tebaklucu.js");
const tebaktebakan = require("./restapi/game/tebaktebakan.js");
const tekateki = require("./restapi/game/tekateki.js");

// Halaman utama
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/api", express.static(path.join(__dirname, "api")));

//ai
app.get("/api/ai/gpt3", (req, res) => gpt3(req, res));


//game
app.get("/api/game/asahotak", (req, res) => asahotak(req, res));
app.get("/api/game/caklontong", (req, res) => caklontong(req, res));
app.get("/api/game/family100", (req, res) => family100(req, res));
app.get("/api/game/lengkapikalimat", (req, res) => lengkapikalimat(req, res));
app.get("/api/game/siapakahaku", (req, res) => siapakahaku(req, res));
app.get("/api/game/susunkata", (req, res) => susunkata(req, res));
app.get("/api/game/tebakbendera", (req, res) => tebakbendera(req, res));
app.get("/api/game/tebakgabut", (req, res) => tebakgabut(req, res));
app.get("/api/game/tebakgambar", (req, res) => tebakgambar(req, res));
app.get("/api/game/tebakgame", (req, res) => tebakgame(req, res));
app.get("/api/game/tebakheroml", (req, res) => tebakheroml(req, res));
app.get("/api/game/tebakkabupaten", (req, res) => tebakkabupaten(req, res));
app.get("/api/game/tebakkalimat", (req, res) => tebakkalimat(req, res));
app.get("/api/game/tebakkata", (req, res) => tebakkata(req, res));
app.get("/api/game/tebakkimia", (req, res) => tebakkimia(req, res));
app.get("/api/game/tebakkpop", (req, res) => tebakkpop(req, res));
app.get("/api/game/tebaklagu", (req, res) => tebaklagu(req, res));
app.get("/api/game/tebaklirik", (req, res) => tebaklirik(req, res));
app.get("/api/game/tebaklogo", (req, res) => tebaklogo(req, res));
app.get("/api/game/tebaklucu", (req, res) => tebaklucu(req, res));
app.get("/api/game/tebaktebakan", (req, res) => tebaktebakan(req, res));
app.get("/api/game/tekateki", (req, res) => tekateki(req, res));


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