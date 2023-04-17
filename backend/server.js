const express = require("express");
const app = express();
const http = require("http");

const server = http.createServer((req, res) => {
    res.end("This is my response");
});

app.get("/api", (req, res) => {
    res.send("This is the response");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
