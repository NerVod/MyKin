const { db } = require("../model/User");
const User = require("../model/User");

exports.registerNewUser = async (req, res) => {
  try {
      // console.log('requete dans userHandler ?',req)
    let user = new User({
      prenom: req.body.prenom,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      photoProfile: null,
      invited: false
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
          return
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

exports.userData = async (req, res) => {
  // console.log('req  userhandler backend pour userData :',req) 
  const _User = req.userData.user;
  // console.log('donnes du user:', _User)
  res.json({
    user: _User
  })
}


exports.dataProtegee = async (req, res) => {
  // console.log('req  userhandler backend pour dataprotegee :',req)

  // const _User = req.userData.user['_id'];
  // console.log('nom du user :', _User)

  res.json({
    message: " protected Data : Pour utilisateur loggé only, quelle chance !"
  })
}


exports.updatePhoto = async(req, res) => {
  console.log(req.body)
  const user = req.body.user;
  const photo = req.body.photoUrl
  console.log('user ?:', user)
  console.log('photo string ?:', photo)

  try {
    const activeUser = await User.findOne(
      {email: user}, (err, userFound) => {
        if(!err) {
          console.log('userFound',userFound)

          User.updateOne(
            {email: user}, 
            {
              photoProfile: photo
            }, function (err, docs) {
              if(err) {
                console.log('erreur if updatephoto', err)
              } else {
                console.log("Photo de profil mise à jour", docs)
              }
            }
          )
        } else {
          console.log('erreur else findOne de updatephoto')

        }
      }
    )

  } catch {
    console.log("erreur maj photo")
  }
}







exports.photoprofile = async (req, res)=> {
  console.log('req userhandlerbackend',req.params.id)
  let email= req.params.id

/////////////////////////////////////////////////////
  // faire recherche de la photo dans mongo ici
/////////////////////////////////////////////////////



  res.json({
    msg : `route photoprofile ${email}`
  })
}