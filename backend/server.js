import bodyParser from "body-parser";
import express from "express";
const app = express();
import { createServer } from "http";
import { spotify } from "./spotify.js";
import { generatePlaylist } from "./gpt.js";

app.use(bodyParser.json());

app.get("/search", async (req, res) => {
    res.json(await spotify(req.body.query, req.body.limit));
});

app.post("/gpt", async (req, res) => {
    res.json(await generatePlaylist(req.body));
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
