const express = require("express");
const cors = require("cors");
const products = require("./products.json");

const app = express();
app.listen(3000);
app.use(cors());

app.get("/", (req, res) => {
    res.json({
        message: "Hello world"
    });
});

app.get("/home", (req, res) => {
    res.json({
        title: "Welcome to our beautiful site",
        paragraph: "The Shoe Shop is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        gallery: [
            "http://www.graciaviva.cat/png/big/24/247222_shoe-backgrounds.jpg",
            "http://www.4usky.com/data/out/83/164745042-shoes-wallpapers.jpg",
            "https://cdn.wallpapersafari.com/67/24/Pys7W6.jpg"
        ]
    });
});

app.get("/products", (req, res) => {
    res.json({
        title: "Out Best Shoes",
        products
    });
});

app.get("/products/:productId", (req, res) => {
    const id = req.params.productId;
    const productFound = products.find(p=>p._id == id);
    res.json(productFound || {
        "_id": "0",
        "title": "Product not found",
        "photo": "http://www.wusthof.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/placeholder/default/wusthof-imagenotfound.jpg",
        "price": 5000000,
        "description": "Product not found product not found product not found product not found product not found product not found."
    });
});

app.get("/about", (req, res) => {
    res.json({
        title: "About Us",
        paragraph: "Shoe Shop is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    });
});

app.get("/contact", (req, res) => {
    res.json({
        title: "Contact Us",
        phone: 2310289402,
        email: "info@shoe-shop.gr",
        paragraph: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        departments: [
            {
                title: "Shoe Shop 1",
                coordinates: {
                    lat: 40.6350739,
                    lng: 22.9427695
                }
            },
            {
                title: "Shoe Shop 2",
                coordinates: {
                    lat: 40.6340732,
                    lng: 22.937471
                }
            }
        ]
    });
});