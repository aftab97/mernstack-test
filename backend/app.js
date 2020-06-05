const express = require("express");
const app = express();
const port = 5002;

app.get("/API/", (req, res) => res.json("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
