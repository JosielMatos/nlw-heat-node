import "dotenv/config";
import express from "express";

const app = express();

const PORT = process.env.PORT || 2121;

//github auth route
app.get("/github", (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

//after auth callback route
app.get("/signin/callback", (req, res) => {
    const { code } = req.query;
    return res.json(code);
})

app.listen(PORT, () => `Server running on ${PORT}`);
