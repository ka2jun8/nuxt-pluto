const axios = require("axios");
const AgreedSample = require("./AgreedSample");
const API_HOST = "http://localhost:3010";

async function apiGateway(req, res, next) {
  if (req.path === "/agreedsample") {
    AgreedSample(req, res, next);
  }
}

module.exports = apiGateway;
