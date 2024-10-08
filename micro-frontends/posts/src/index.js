require('dotenv').config()

const path = require('path');
const express = require('express');
const app = express();
const { name: appName } = require("../package.json");

app.use(express.static(path.join(__dirname, '/imports')))

// Send down a basic html for the /index.html for simpler testing
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`${appName} app listening on port ${port}!`))
