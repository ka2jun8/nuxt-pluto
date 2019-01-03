class Counter {
  constructor() {
    this.path = "/counter";
    this.counter = 0;
  }

  async post(req, res) {
    this.counter++;
    return res.send({ counter: this.counter });
  }
}

module.exports = Counter;
