import express from "express";
const app = express();
import { createServer } from "http";
import { spotify } from "./spotify.js";

const server = createServer((req, res) => {
    res.end("This is my response");
});

app.get("/api", (req, res) => {
    res.send("This is the response");
    var accessToken = spotify();
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
