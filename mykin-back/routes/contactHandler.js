const User = require('../model/User');

exports.contactslistData = async (req, res)=> {
    // console.log("reqparam contactlistdata contacthandler :", req.query.name)
    let contactListe = []
    try {
        const _contactListe = await User.find();
        if(!User){
            res.status(400).json({
                type: "liste d'utilisatuers vide",
                msg: "créer des utilisateurs"
            })
        } else {
            // console.log('_contactListe[0].name :', _contactListe[0].name)
            // console.log('_contactListe[1].name :', _contactListe[1].name)
            for(let user of _contactListe ){
                // console.log('user :', user)
                // console.log('user.name :', user.name)
                // console.log('user.photoProfile :', user.photoProfile)
                // console.log('user.invited :', user.invited)
                let _User = {name: user.name, prenom: user.prenom, photoProfile: user.photoProfile,invited: user.invited, email: user.email}
                if(_User.email !== req.query.name){
                    contactListe.push(_User)
                } 
            }
            // console.log('contactliste filtré :', contactListe)
            // contactListe.push(_contactListe)
            res.json(contactListe)
            // return contactListe
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

    console.log("requete invitationContact", req.params)
    const userInvited = req.params.id;
    const inviteur = req.params.param
    console.log("mail requete back :", userInvited)
    console.log("mail requete back Inviteur :", inviteur)
    const userUpdated = [];

    try {
        const _userInvited = await User.findOne(
            {email : req.params.id},
            (err, user) => {
            if(!err){
                // console.log("liste en attente deja en bdd: ", user.invitEnAttente )
                const invitations = user.invitEnAttente

                for(let i=0; i<invitations.length; i++){
                    if(invitations[i] === inviteur){
                        console.log('invitation déjà en attente')
                        return
                    } else {
                        console.log("pas de doublon d'invitation")
                    }
                    invitations.push(inviteur)
                }

                // console.log("liste invit updated a sauvegarder: ", user.invitEnAttente )
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
                console.log("user updated ", user)
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



    res.json({
        msg: 'demande invit reçue au back'
    })
}
