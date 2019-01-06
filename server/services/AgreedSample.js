const axios = require("axios");
const { API_BASE } = require("../config");

class AgreedSample {
  constructor() {
    this.path = "/agreedsample";
  }

  async get(req, res) {
    const result = await axios.get(`${API_BASE}${this.path}`);
    return res.send(result.data);
  }
}

module.exports = AgreedSample;
