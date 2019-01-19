class Login {
  constructor() {
    this.path = "/login";
  }

  async post(req, res) {
    const {
      body: { username, password },
    } = req;

    // TODO validate

    if (username !== "scott@example.com" || password !== "tiger") {
      return res.status(401).send({ error: "Invalid username or password" });
    }

    if (req.session) {
      req.session.auth = { username };
    }

    return res.send({ username });
  }
}

module.exports = Login;
