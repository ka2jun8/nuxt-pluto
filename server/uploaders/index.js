const axios = require("axios");
const { API_BASE } = require("../config");

class UploadSample {
  constructor() {
    this.path = "/uploadsample";
  }

  middleware() {
    return (req, res, next) => {
      const { file } = req;
      const filepath = `/public/${file.filename}`;
      return axios
        .post(`${API_BASE}${this.path}`, { path: filepath })
        .then(_result => {
          res.json({
            path: filepath,
          });
        })
        .catch(e => {
          console.error({ e });
          next();
        });
    };
  }
}

module.exports = UploadSample;
