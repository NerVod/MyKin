const express = require("express");
const path = require("path");
const cors = require("cors");
const Database = require("./database/db");
const Mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const jwt = require("jsonwebtoken");
const userRoute = require("./routes/user.routes");
const url = process.env.DB;
require("dotenv").config();

// connexion à la BDD
Mongoose.Promise = global.Promise;
Mongoose.connect(
  Database.db,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(
  () => {
    console.log("connecté à la base de données backend");
  },
  (error) => {
    console.log("erreur de connexion à la BDD ...:", error);
  }
);

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// static files path
app.use(express.static(path.join(__dirname, "mykin/src/assets")));

// api root
app.use("/api", userRoute);

// PORT
const port = process.env.PORT || 3000;

// 404 handler
app.use((req, res, next) => {
  // next(createError(404));
  res.send("error 404 route n'existe pas");
});

//Base route
app.get("/", (req, res) => {
  res.json({ messagejson: "route principale délivrée par le backend" });
});

// Base Route
app.get("/", (req, res) => {
  res.send("invalid endpoint");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "mykin/src/app/app.component.html"));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

app.use("/img", express.static(path.join(__dirname, "public/images")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.json({ messagejson: "route principale délivrée par le backend" });
// });

///////////////////// Création compte utilistateur/////////////////////
app.post("/register", (req, res) => {
  console.log("req : ", req);
});

const httpServer = app.listen(port, () => {
  console.log(`Le serveur backend écoute sur le port ${port}`);
});
