import "dotenv/config";
import express from "express";
import { router } from "./routes";

const app = express();
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

const PORT = process.env.PORT || 2121;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
