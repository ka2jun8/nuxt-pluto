const axios = require("axios");
const API_BASE = "https://hacker-news.firebaseio.com/v0";

async function fetchItem(itemId) {
  const res = await axios.get(`${API_BASE}/item/${itemId}.json`);
  return res.data;
}

async function fetchTopStories(page = 1) {
  const { data: ids } = await axios.get(`${API_BASE}/topstories.json`);
  const slicedIds = ids.slice((page - 1) * 10, page * 10);
  return Promise.all(slicedIds.map(id => fetchItem(id)));
}

class HackerNews {
  constructor() {
    this.path = "/hackernews";
  }

  async get(req, res) {
    const result = await fetchTopStories(req.params && req.params.page);
    return res.send(result);
  }
}

module.exports = HackerNews;
