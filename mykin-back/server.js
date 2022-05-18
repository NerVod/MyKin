const express = require("express");
const path = require("path");
const cors = require("cors");
const Database = require('./db');
const bcrypt = require("bcrypt");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const jwt = require("jsonwebtoken");
require("dotenv").config();

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

///////////////////// Création compte utilistateur/////////////////////
app.post("/register", (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.json({
      "Erreur création de compte": "vérifier email ou de mot de passe",
    });
    return
  }

  Database.User.findOne({email: req.body.email }).then((user) => {
      if(user) {
          res.json({"Compte existant": "Cet email est associé à un compte"})
      } else {
          Database.User.create({
              username: req.body.username,
              email: req.body.email,
              password: bcrypt.hashSync(req.body.password, salt)
          })
          .then((user) => {
              console.log("compte créé en base de données")

              const token = jwt.sign(
                  { id: user._id, email: user.email, username: user.username }, process.env.JWTPRIVATEKEY
              );
              console.log("token créé à la création du compte :", token);
              res.setHeader("Authorization", "Bearer " + token);
              res.json({"compte créé": "Compte créé avec succès en base de données"})
          })
          .catch((err) => {
              console.error(err);
              res.json({"Erreur création": "compte non activé"})
          });
      };
  });
});

const httpServer = app.listen(config.port, () => {
  console.log(`serveur backend écoute sur le port ${config.port}`);
});
