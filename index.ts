import Express from "express";

const app = Express();

app.get("/test", (req, res) => {
  res.send("Hello world!");
});

app.listen(8080);
