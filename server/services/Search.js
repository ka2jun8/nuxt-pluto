const axios = require("axios");
const { API_BASE } = require("../config");
const SEARCH_MAX_COUNT = 50;

class Search {
  constructor() {
    this.path = "/search";
  }

  async get(req, res) {
    const { page, id, ...query } = req.query;
    const base = `${API_BASE}/beauty/search/`;
    const pathname = id ? `${base}${id}` : base;
    query.start = page * SEARCH_MAX_COUNT + 1;

    const result = await axios.get(pathname, {
      params: query,
    });

    return res.send(result.data);
  }
}

module.exports = Search;
