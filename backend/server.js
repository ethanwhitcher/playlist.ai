import bodyParser from "body-parser";
import express from "express";
const app = express();
import { createServer } from "http";
import { generatePlaylist } from "./gpt.js";

app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.send("This is the response");
});

app.post("/gpt", async (req, res) => {
    res.json(await generatePlaylist(req.body));
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
