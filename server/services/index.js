const AgreedSample = require("./AgreedSample");

async function apiGateway(req, res, next) {
  if (req.path === "/agreedsample") {
    AgreedSample(req, res, next);
  }
}

module.exports = apiGateway;
