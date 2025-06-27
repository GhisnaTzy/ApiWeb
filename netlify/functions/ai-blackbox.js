const axios = require("axios");

exports.handler = async (event) => {
  const params = event.queryStringParameters;
  const {message } = params;

  if (!message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Parameter ?prompt= dan ?message= wajib diisi" }),
    };
  }

  try {
    const response = await axios.get("https://api.siputzx.my.id/api/ai/blackboxai", {
      params: {content: message },
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(response.data, null, 2),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Gagal memproses permintaan ke API" }),
    };
  }
};
