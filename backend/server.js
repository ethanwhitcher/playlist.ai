import express from "express";
const app = express();
import { createServer } from "http";

const server = createServer((req, res) => {
    res.end("This is my response");
});

app.get("/api", (req, res) => {
    res.send("This is the response");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
