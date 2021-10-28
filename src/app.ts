import "dotenv/config";
import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import { router } from "./routes";

const app = express();
app.use(cors());

const serverHttp = http.createServer(app);
const io = new Server(serverHttp, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`User connected on socket ${socket.id}`);
});

app.use(express.json());

app.use(router);

//github auth route
app.get("/github", (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

//github auth callback route
app.get("/signin/callback", (req, res) => {
  const { code } = req.query;
  return res.json(code);
});

export { serverHttp, io };