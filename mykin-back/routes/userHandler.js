const User = require("../model/User");

exports.registerNewUser = async (req, res) => {
  try {
      // console.log('requete dans userHandler ?',req)
    let user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    // console.log('req user ? :',req.body.name)
    user.password = await user.hashPassword(req.body.password);
    let createdUser = await user.save();
    res.status(200).json({
      message: "Nouvel utilisateur créé",
      data: createdUser,
    });
  } catch (err) {
    console.log("erreur de création de compte :", err);
    res.status(500).json({
      error: err,
    });
  }
};

exports.loginUser = async (req, res) => {
  const login = {
      email: req.body.email,
      password: req.body.password
  }
  try {
      let user = await User.findOne({
          email: login.email
      });
      //check if user exit
      if (!user) {
          res.status(400).json({
              type: "Utilisateur introuvable",
              msg: "Vérifier les données saisies"
          })
      }
      let match = await user.compareUserPassword(login.password, user.password);
      if (match) {
          let token = await user.generateJwtToken({
              user
          }, "secret", {
              expiresIn: 604800
          })
          if (token) {
              res.status(200).json({
                  success: true,
                  token: token,
                  userCredentials: user
              })
          }
      } else {
          res.status(400).json({
              type: "Utilisateur introuvable",
              msg: "Vérifier les données saisies"
          })
      }
  } catch (err) {
      console.log(err)
      res.status(500).json({
          type: "Un problème est survenu",
          msg: err
      })
  }
}

exports.dataProtegee = async (req, res) => {
  res.json({
    message: "Pour utilisateur loggé only, quelle chance !"
  })
}