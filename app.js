const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.use("/static", express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
    res.render("index");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});