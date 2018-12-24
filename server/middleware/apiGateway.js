const services = require("../services");

function apiGateway() {
  const apiList = Object.values(services).reduce((acc, Service) => {
    const service = new Service();
    acc[service.path] = service;
    return acc;
  }, {});

  return async (req, res, next) => {
    if (!apiList || apiList.length <= 0) {
      next();
    }
    const promises = Object.keys(apiList).map(async path => {
      if (req.path === path) {
        const s = apiList[path];
        if (req.method === "GET") {
          return await s.get(res);
        } else if (req.method === "POST") {
          return await s.post(res);
        }
        // other methods
      }
    });
    const result = await Promise.race(promises);
    if (!result) {
      next();
    }
  };
}

module.exports = apiGateway;
