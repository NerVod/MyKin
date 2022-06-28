const User = require('../model/User');

exports.contactslistData = async (req, res)=> {
    // console.log("reqparam contactlistdata contacthandler :", req.query.name)
    let contactListe = []
    let listeUserActifFiltré = []
    const activeUser = req.params.id;
    try {
        const _contactListe = await User.find();
        if(!User){
            res.status(400).json({
                type: "liste d'utilisateurs vide",
                msg: "créer des utilisateurs"
            })
        } else {

            // console.log("_contactListe :", _contactListe)
            function checkUserActif(User){
                return User.email !== activeUser
            }

            function getActiveUser(User){
                return User.email === activeUser
            }

            const utilisateur =_contactListe.filter( checkUserActif )
            // console.log('useractif filtré :', utilisateur)
            for(contact of utilisateur) {
                let _User = {name: contact.name, prenom: contact.prenom, photoProfile: contact.photoProfile,invited: contact.invited, email: contact.email}
                listeUserActifFiltré.push(_User)
            }
            // console.log('liste formatée useractif filtré :', listeUserActifFiltré)


            const activeAccount = _contactListe.filter(getActiveUser)
            // console.log("active account :", activeAccount)

            const listeAmisAFiltrer = activeAccount[0].amis;
            // console.log("liste amis a enlever :", listeAmisAFiltrer)




            for(let user of _contactListe ){

                let _User = {name: user.name, prenom: user.prenom, photoProfile: user.photoProfile,invited: user.invited, email: user.email}
                // console.log('_User.email', _User.email)
                if(_User.email != activeUser){
                    
                    contactListe.push(_User);
                    // console.log('contactListe en remplissage :', contactListe)
                } 
            }

           for(ami of listeAmisAFiltrer){
            // console.log('ami ??? :', ami)
                    contactListe.filter(function(el) { if (el.email === ami) {contactListe.splice(el, 1)}} )
                    // console.log("contactListe filtrage §§§§§§§§", contactListe)
            }
        

            // console.log('contactliste sans userActif ni ami ?????? :', contactListe)



            res.json(contactListe)

        } 
    } catch (err) {
        console.log(err)
        res.status(500).json({
            type: "Un problème est survenu",
            msg: err
        })
    }
}

exports.invitationContact = async ( req, res) => {

    // console.log("requete invitationContact", req.params)
    const userInvited = req.params.id;
    const inviteur = req.params.param
    // console.log("mail requete back :", userInvited)
    // console.log("mail requete back Inviteur :", inviteur)
    const userUpdated = [];

    try {
        const _userInvited = await User.findOne(
            {email : req.params.id},
            (err, user) => {
            if(!err){

                let invitations = user.invitEnAttente

                    for(let i=0; i <  invitations.length; i++){
                        
                        if(invitations[i] === inviteur){
                            // console.log('invitation déjà en attente :', invitations[i])
                            res.json({
                                msg: `invitation déjà envoyée à ${userInvited}`
                            })
                            return
                        } else {
                            console.log("pas de doublon d'invitation")
                        }    
                    }
                    // console.log('mail to push :', inviteur)
                    invitations.push(inviteur)
                    // console.log('invitations à sauvegarder dans bdd :', invitations)


                User.updateOne(
                    {email: userInvited},
                    {invitEnAttente: invitations }, 
                function (err, docs) {
                    if(err){
                        console.log('err dans if de updateOne :',err)
                    }
                    else{
                        console.log("user mis à jour", docs)
                    }
                }
                
                )
                // console.log("user updated ", user)
                res.json({
                    msg: `invitation envoyée à ${user.name}`
                })
            }else {
                console.log(err)
            }
        })
    } catch {
        console.log("pas de user trouvé")
    }

}

exports.updatedemandeenvoyee = async ( req, res) => {

    // console.log("requete updatedemandeenvoyee", req.params)
    const userInvited = req.params.id;
    const inviteur = req.params.param
    // console.log("update liste demande envoyee userInvited :", userInvited)
    // console.log("update liste demande envoyee Inviteur :", inviteur)
    // const userUpdated = [];

    try {
        const _inviteur = await User.findOne(
            {email : req.params.param},
            (err, user) => {
            if(!err){

                let invitations = user.invitEnvoyee

                    for(let i=0; i <  invitations.length; i++){
                        
                        if(invitations[i] === userInvited){
                            // console.log('invitation déjà en attente :', invitations[i])
                            res.json({
                                msg: `invitation déjà envoyée à ${userInvited}`
                            })
                            return
                        } else {
                            console.log("pas de doublon d'invitation")
                        }    
                    }
                    // console.log('mail to push :', userInvited)
                    invitations.push(userInvited)
                    // console.log('invitations à sauvegarder dans bdd :', invitations)


                User.updateOne(
                    {email: inviteur},
                    {invitEnvoyee: invitations }, 
                function (err, docs) {
                    if(err){
                        console.log('err dans if de updateOne :',err)
                    }
                    else{
                        console.log("user mis à jour", docs)
                    }
                }
                
                )
                // console.log("user updated ", user)
                res.json({
                    msg: `invitation ajoutée à ${user.name}`
                })
            }else {
                console.log(err)
            }
        })
    } catch {
        console.log("pas de user trouvé")
    }

}

exports.isinvited = async (req, res) => {
  const userInvited = req.params.id;
  const inviteur = req.params.param;

  try {
    const _inviteur = await User.findOne({ email: inviteur }, (err, user) => {
      if (!err) {
        let invitations = user.invitEnvoyee;
        if(invitations.length == 0){
            res.json({msg: false})
            return
        }

        for (let i = 0; i < invitations.length; i++) {
          if (invitations[i] === userInvited) {
            res.json({ isInvited: true });
            return;
          }
        }
        res.json({ isInvited: false });
        return;
      } else {
        console.log(" err dans le else", err);
      }
    });
  } catch {
    // console.log(`Pas de demande en attente pour ${userInvited}`);
    return
  }
};


exports.getInvitAttente = async (req, res) => {
  const inviteur = req.params.id;
  const contactListe = [];

  try {
    const _contactListe = await User.find();

    User.findOne({ email: inviteur }, (err, user) => {
      if (!err) {
        let invitations = user.invitEnAttente;
            if(invitations.length == 0){
                res.json({msg: "pas de demande en attente"})
                return
            }
        for (let user of invitations) {
          User.findOne({ email: user }, (err, contact) => {
            if (!err) {
              let _User = {
                name: contact.name,
                prenom: contact.prenom,
                photoProfile: contact.photoProfile,
                invited: contact.invited,
                email: contact.email,
              };
              contactListe.push(_User);
            }

            if (invitations.length === contactListe.length) {
              res.json(contactListe);
            }

          });
        }
      } else {
        res.json({msg: 'pas de demande user'})
        return
      }
    });
  } catch {
    console.log("une erreur s'est produite");
    res.json({ msg: "erreur de recherche liste invitations en attente" });
  }
};


exports.accepterAmi = async (req, res) => {
    const userInvited = req.params.id;
    const accepteur = req.params.param;

    try {

       const _Accepteur = await User.findOne(
            {email: accepteur}, (err, user) => {
                if(!err) {
                    const _UserInvited = [userInvited];
                    const invitAttenteAccepteur = user.invitEnAttente
                    const listeinvitEnAttenteApresAccept = invitAttenteAccepteur.filter((obj) => _UserInvited.indexOf(obj)  === -1);

                    // vérif si le nouvel ami a été demandé de mon coté en ami
                    let invitEnvoyee = user.invitEnvoyee;
                    const invitEnvoyeeApresAccept = invitEnvoyee.filter((obj) => _UserInvited.indexOf(obj) === -1)
                    let Amis = user.amis
                    Amis.push(userInvited);

                    User.updateOne(
                        {email: accepteur},
                        {
                            invitEnAttente: listeinvitEnAttenteApresAccept,
                            invitEnvoyee: invitEnvoyeeApresAccept,
                            amis: Amis,
                        }, function (err, docs) {
                            if(err) {
                                console.log('erreur dans if updateOne acceptAmi', err)
                            }
                            else {
                                console.log("liste amis mise à jour", docs)
                            }
                        }
                    )
                    res.json({
                        msg: ` ${userInvited} : amis ajouté  à la liste d'amis de ${user.name}`
                    })
                }
            }
        );    

    } catch {
        console.log(' err catch acceptami ')
    }
}


exports.acceptationAmi = async (req, res, next) => {
    const userInvited = req.params.id;
    const accepteur = req.params.param;
    // console.log('userInvited acceptation ami',userInvited)
    // console.log('inviteur acceptation ami',accepteur)

    try {

    const _Inviteur = await User.findOne(
        {email: userInvited}, (err, user) => {
            if(!err) {
                const invitEnvoyee = user.invitEnvoyee;
                const inviteurAClean = accepteur
                let invitEnvoyeeInviteurApresAccept = invitEnvoyee.filter((obj) => inviteurAClean.indexOf(obj) === -1);

                // invit en attente à nettoyer
                const invitEnAttente = user.invitEnAttente

                let invitEnAttenteApresAccept = invitEnAttente.filter((obj) => inviteurAClean.indexOf(obj) === -1);
                let Amis = user.amis;
                Amis.push(accepteur);

                User.updateOne(
                    {email: userInvited},
                    {
                        invitEnvoyee: invitEnvoyeeInviteurApresAccept,
                        invitEnAttente: invitEnAttenteApresAccept,
                        amis: Amis,
                    }, function (err, docs) {
                        if(err) {
                            console.log('erreur dans if updateOne acceptAmi', err)
                        }
                        else {
                            console.log("liste amis mise à jour", docs)
                        }
                    }
                )
                
            }
        }
        )
        
    } catch {
        console.log('catch acceptation ami')
        
    }   
    next()
}


exports.hasPendingInvit = async(req, res) => {
    const inviteur = req.params.id;
    const contactListe = [];
  
    try {
      const _contactListe = await User.find();
  
      User.findOne({ email: inviteur }, (err, user) => {
        if (!err) {
          let invitations = user.invitEnAttente;
              if(invitations.length === 0){
                  res.json({invitEnAttente: false})
                  return
              } else(
                res.json({
                    invitEnAttente: true
                })
              )

        } else {
          res.json({msg: 'pas de user trouvé'})
          return
        }
      });
    } catch {
      console.log("une erreur s'est produite");
      res.json({ msg: "erreur de recherche has pending invites" });
    }
}
