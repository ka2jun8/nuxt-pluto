const express = require("express");
const consola = require("consola");
const bodyParser = require("body-parser");
const session = require("express-session");
const multer = require("multer");
const os = require("os");
const path = require("path");
const { Nuxt, Builder } = require("nuxt");
const apiGateway = require("./middleware/apiGateway");
const UploadSample = require("./uploaders");
const app = express();
const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;
const tmpDir = os.tmpdir();
const upload = multer({
  dest: path.resolve(__dirname, tmpDir),
});

app.set("port", port);

// Import and Set Nuxt.js options
let config = require("../nuxt.config.js");
config.dev = !(process.env.NODE_ENV === "production");

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  app.use(bodyParser.json());
  app.use(
    session({
      secret: "nuxt-pluto",
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 },
    })
  );

  // API handler
  app.use("/api", apiGateway());

  // Uploade handler
  const uploader = new UploadSample();
  app.post(
    "/upload/uploadsample",
    upload.single("file"),
    uploader.middleware()
  );
  app.use("/public", express.static(path.resolve(tmpDir)));

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  });
}
start();
