require("dotenv").config();

const path = require("path");
const proxy = require("express-http-proxy");
const express = require("express");
const app = express();

app.use("/a", proxy(process.env.A_URL));
app.use("/b", proxy(process.env.B_URL));
app.use("/c", proxy(process.env.C_URL));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "./index.html")));

const port = process.env.PORT || 3000;

app.listen(port, () => `Listening for connections on port ${port}`);
