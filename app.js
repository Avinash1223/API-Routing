const express = require("express");
const app = express();

app.get("/", (request, response) => {
  return response.send("Home Page");
});

app.get("/about", (request, response) => {
  return response.send("About Page");
});

module.exports = app;
