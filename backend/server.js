import bodyParser from "body-parser";
import express from "express";
const app = express();
import { createServer } from "http";
import { spotify } from "./spotify.js";

const server = createServer((req, res) => {
    res.end("This is my response");
});

app.use(bodyParser.json());

app.get("/api", async (req, res) => {
    // res.send("This is the response");
    //spotify();
    res.json(await spotify(req.body.query, req.body.limit));
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
