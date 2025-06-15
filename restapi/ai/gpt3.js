const axios = require("axios");

module.exports = async (req, res) => {
  const { prompt, message } = req.query;

  if (!prompt || !message) {
    res.status(400).json({ error: "Parameter ?prompt= dan ?message= wajib diisi" });
    return;
  }

  try {
    const response = await axios.get("https://api.siputzx.my.id/api/ai/gpt3", {
      params: { prompt, content: message }
    });

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response.data, null, 2));
  } catch (error) {
    res.status(500).json({ error: "Gagal memproses permintaan ke GPT3 API" });
  }
};