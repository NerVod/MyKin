const express = require("express");
const router = express.Router();
const userHandler = require("./userHandler");
const auth = require("../middleware/auth");
const contactHandler= require("./contactHandler")





router.post("/register", userHandler.registerNewUser);
router.post("/login", userHandler.loginUser);


// router.get("/photoprofile/:id", userHandler.photoprofile )
router.get("/logged", auth, userHandler.dataProtegee);
router.get("/contact", auth, userHandler.dataProtegee);
router.get("/user", auth, userHandler.userData);
router.get("/contactslist", auth, contactHandler.contactslistData );
router.get("/invitecontact/:id/:param", auth,  contactHandler.invitationContact );
router.get("/updatedemandeenvoyee/:id/:param", auth, contactHandler.updatedemandeenvoyee)
router.get("/isinvited/:id/:param", auth, contactHandler.isinvited)
router.get("/getinvitattente/:id",  contactHandler.getInvitAttente)
router.get("/accepterami/:id/:param", auth,  contactHandler.accepterAmi)


module.exports = router;


