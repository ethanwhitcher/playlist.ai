import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
const app = express();
import { createServer } from "http";
import { spotify } from "./spotify.js";

const server = createServer((req, res) => {
    res.end("This is my response");
});

app.use(bodyParser.json());
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.get("/search", async (req, res) => {
    res.json(await spotify(req.query.q, req.query.limit));
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
