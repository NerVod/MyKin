const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

const config = {
  port: 3000,
};

app.use("/img", express.static(path.join(__dirname, "public/images")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({ messagejson: "route principale délivrée par le backend" });
});

const httpServer = app.listen(config.port, () => {
  console.log(`serveur backend écoute sur le port ${config.port}`);
});
