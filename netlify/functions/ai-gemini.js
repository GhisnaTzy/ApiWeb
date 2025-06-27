const axios = require("axios");

exports.handler = async (event) => {
  const { message } = event.queryStringParameters;

  if (!message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Parameter ?message= wajib diisi" }),
    };
  }

  const text = message; 

  try {
    const response = await axios.get("https://api.nekorinn.my.id/ai/gemini", {
      params: { text }
    });
    const data = response.data;

    if ('creator' in data) delete data.creator;

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data, null, 2)
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Gagal mengambil data dari API Gemini",
        detail: error.response?.data || error.message,
      })
    };
  }
};
