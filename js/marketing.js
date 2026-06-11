let fs = require("fs");
let allImages = fs.readdirSync("../assets/images/marketing");
console.log(allImages);
let imageArray = allImages.map((image) => {
    let noPng = image.replace(/\s*(.png|.PNG)/g, "").trim();
    let noUnderscore = noPng.replace(/\s*(_)/g, " ").trim();
    return noUnderscore;
});

console.log(`#2: ${imageArray}`);
const express = require('express');
const app = express();
const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.get('/api/data', (req, res) => {
  const dataToSend = imageArray;
  res.json(dataToSend); // Sends data as JSON
});
