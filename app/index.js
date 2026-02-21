const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 Fully Automated DevSecOps Pipeline Running");
});

app.listen(3000, () => console.log("App running"));