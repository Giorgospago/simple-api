const express = require("express");
const cors = require("cors");

const app = express();
app.listen(3000);
app.use(cors());

app.get("/", (req, res) => {
    res.json({

    });
});