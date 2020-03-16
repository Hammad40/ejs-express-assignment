var express = require("express");
var app = express();
var port = 3000;
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("home");
});
app.get("/bye", function(req, res) {
  res.render("bye");
});

app.listen(port, function() {
  console.log("server is running on port" + port);
});
module.exports = app;
