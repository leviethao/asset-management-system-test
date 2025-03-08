require("dotenv").config();
const express = require("express");
const { Location, Asset } = require("./models");

const app = express();
app.use(express.json());

app.get("/locations", async (req, res) => {
  const locations = await Location.findAll();
  res.json(locations);
});

app.get("/assets", async (req, res) => {
  const assets = await Asset.findAll();
  res.json(assets);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
