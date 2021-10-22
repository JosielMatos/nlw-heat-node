import express from "express";

const app = express();

const PORT = process.env.PORT || 2121;

app.get("/github", (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIEND_ID}`
  );
});

app.listen(PORT, () => `Server running on ${PORT}`);
