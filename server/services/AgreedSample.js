const { read } = require("../util");

class AgreedSample {
  constructor() {
    this.path = "/agreedsample";
  }

  async get(res) {
    const result = await read(this.path);
    return res.send(result.data);
  }
}

module.exports = AgreedSample;
