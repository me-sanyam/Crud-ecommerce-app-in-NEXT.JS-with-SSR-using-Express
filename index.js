const express = require("express");

const dev = process.env.NODE_ENV !== 'production'
const app = require("next")({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = new express();
    server.get("/", (req, res) => {
     return app.render(req, res, "/Landing");
    });

    server.get("*" , (req, res) =>  handle(req, res ))

    server.listen(3000, () => console.log("> Ready on http://localhost:3000"));
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
