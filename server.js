const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let messages = [];

app.get("/", (req, res) => {
  res.send("Ivangram server работает 🚀");
});

app.get("/messages", (req, res) => {
  res.json(messages);
});

app.post("/send", (req, res) => {
  const { user, text } = req.body;
  const message = {
    user,
    text,
    time: new Date()
  };
  messages.push(message);
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
