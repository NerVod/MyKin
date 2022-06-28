const express = require("express");
const router = express.Router();
const userHandler = require("./userHandler");
const auth = require("../middleware/auth");
const contactHandler= require("./contactHandler")





router.post("/register", userHandler.registerNewUser);
router.post("/login", userHandler.loginUser);
router.post("/deletefriend",contactHandler.deleteFriend);
router.post("/contactslist", contactHandler.contactslistData );
router.post("/invitecontact", contactHandler.invitationContact );
router.post("/updatedemandeenvoyee", contactHandler.updatedemandeenvoyee)
router.post("/isinvited", contactHandler.isinvited)
router.post("/getinvitattente",  contactHandler.getInvitAttente)
router.post("/accepterami", contactHandler.acceptationAmi,  contactHandler.accepterAmi,)
router.post("/pendinginvit", contactHandler.hasPendingInvit)
router.post("/getallfriends", contactHandler.getAllFriends)


// router.get("/photoprofile/:id", userHandler.photoprofile )
router.get("/logged", auth, userHandler.dataProtegee);
router.get("/contact", auth, userHandler.dataProtegee);
router.get("/user", auth, userHandler.userData);



module.exports = router;


