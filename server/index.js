const express = require("express");
const consola = require("consola");
const bodyParser = require("body-parser");
const session = require("express-session");
const { Nuxt, Builder } = require("nuxt");
const apiGateway = require("./middleware/apiGateway");
const app = express();
const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;

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
