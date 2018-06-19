const path = require('path');
const http = require('http');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 5000;
var app = express();
var server = http.createServer(app);


app.use(express.static(publicPath));



server.listen(port, () => {
    console.log(`Server is up on ${port}`);
});
