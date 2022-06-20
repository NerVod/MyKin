const User = require("../model/User");

exports.contactslistData = async (req, res) => {
  let contactListe = [];
  try {
    const _contactListe = await User.find();
    if (!User) {
      res.status(400).json({
        type: "liste d'utilisatuers vide",
        msg: "créer des utilisateurs",
      });
    } else {
      contactListe.push(_contactListe);
      console.log('ContactListe demandée par le front :',_contactListe);
      return _contactListe;
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      type: "Un problème est survenu",
      msg: err,
    });
  }
};
