const User = require('../model/User');

exports.contactslistData = async (req, res)=> {
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
                contactListe.push(_User)
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
