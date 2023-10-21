const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  const result = await axios.get("https://fakestoreapi.com/products");
  res.send(result.data);
});

app.listen(7070, () => {
  console.log("API is up and running on port 7070");
});
