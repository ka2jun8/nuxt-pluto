const axios = require("axios");
const { API_HOST } = require("./config");

async function read(path) {
  const result = await axios.get(`${API_HOST}${path}`);
  return result;
}

module.exports = { read };
