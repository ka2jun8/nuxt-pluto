class Logout {
  constructor() {
    this.path = "/logout";
  }

  async post(req, res) {
    if (!req.session) {
      return res.send({ error: "Not logged in" });
    }
    delete req.session.auth;
    return res.send({ status: "success" });
  }
}

module.exports = Logout;
