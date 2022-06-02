const express = require("express");
const path = require("path");
const cors = require("cors");
const Database = require("./database/db");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const jwt = require("jsonwebtoken");
const userRoute = require("./routes/user.routes");
require("dotenv").config();

mongoose.Promise = global.Promise;
mongoose
  .connect(Database.db, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("connecté à la base de données");
    },
    (error) => {
      console.log("erreur de connexion à la BDD :", error);
    }
  );

const app = express();

// static files path
app.use(express.static(path.join(__dirname, "mykin/src/assets")));

// api root
app.use("/api", userRoute);

// PORT
const port = process.env.PORT || 3000;

// 404 handler
app.use((req, res, next) => {
  // next(createError(404));
  res.send("error 404");
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
  console.error(err);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err);
});

app.use("/img", express.static(path.join(__dirname, "public/images")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.get("/", (req, res) => {
//   res.json({ messagejson: "route principale délivrée par le backend" });
// });

///////////////////// Création compte utilistateur/////////////////////
app.post("/register", (req, res) => {
  console.log("req : ", req);
  if (!req.body.email || !req.body.password) {
    res.json({
      "Erreur création de compte": "vérifier email ou de mot de passe",
    });
    return;
  }

  Database.User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      res.json({ "Compte existant": "Cet email est associé à un compte" });
    } else {
      Database.User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, salt),
      })
        // .then((user) => {
        //   console.log("compte créé en base de données");

        //   const token = jwt.sign(
        //     { id: user._id, email: user.email, username: user.username },
        //     process.env.JWTPRIVATEKEY
        //   );
        //   console.log("token créé à la création du compte :", token);
        //   res.setHeader("Authorization", "Bearer " + token);
        //   res.json({
        //     "compte créé": "Compte créé avec succès en base de données",
        //   });
        // })
        .catch((err) => {
          console.error(err);
          console.log(err);
          res.json({ "Erreur création": "compte non activé" });
        });
    }
  });
});

const httpServer = app.listen(port, () => {
  console.log(`serveur backend écoute sur le port ${port}`);
});
