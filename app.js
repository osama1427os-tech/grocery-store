const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.use("/static", express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
    res.render("index");
});
// صفحة المتجر
app.get('/shop', (req, res) => {
    res.render('shop'); 
});

// صفحة العروض
app.get('/offers', (req, res) => {
    res.render('offers'); 
});

// صفحة تواصل معنا
app.get('/contact', (req, res) => {
    res.render('contact'); 
});

// صفحة السلة
app.get('/cart', (req, res) => {
    res.render('cart'); 
});
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});