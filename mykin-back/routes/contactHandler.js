const User = require('../model/User');

exports.contactslistData = async (req, res)=> {
    // console.log("reqparam contactlistdata contacthandler :", req.query.name)
    let contactListe = []
    try {
        const _contactListe = await User.find();
        // console.log('_contactListe totale %%%%%%%%%%%%%%% ', _contactListe)
        if(!User){
            res.status(400).json({
                type: "liste d'utilisateurs vide",
                msg: "créer des utilisateurs"
            })
        } else {

            for(let user of _contactListe ){

                let _User = {name: user.name, prenom: user.prenom, photoProfile: user.photoProfile,invited: user.invited, email: user.email}
                // console.log('_User.email', _User.email)
                if(_User.email != req.query.name){
                    contactListe.push(_User);
                    // console.log('contactListe en remplissage :', contactListe)
                } 
            }
            // console.log('contactliste filtré :', contactListe)

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
    const _inviteur = await User.findOne(
        {email : inviteur},
        (err, user) => {
            if(!err){
                console.log(user)
                let invitations = user.invitEnvoyee

                for(let i=0; i <  invitations.length; i++){
                    if(invitations[i] === userInvited){
                        res.json({isInvited: true})
                        return
                    }
                }
                res.json({isInvited :false})
                return

            } else {
                console.log(' err dans le else', err)
            }
        }
    )
} catch {
    console.log("erreur de recherche d'invitation envoyée")
}

}
