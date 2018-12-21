const axios = require("axios");
const API_HOST = "http://localhost:3010";

async function AgreedSample(req, res, next) {
  const path = "agreedsample";
  const result = await axios.get(`${API_HOST}/${path}`);
  res.send(result.data);
}

module.exports = AgreedSample;
