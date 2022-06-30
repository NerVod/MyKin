const express = require("express");
const router = express.Router();
const userHandler = require("./userHandler");
const auth = require("../middleware/auth");
const contactHandler= require("./contactHandler");
const wallpostHandler = require('./wallpostHandler');




router.post("/register", userHandler.registerNewUser);
router.post("/login", userHandler.loginUser);
router.post("/deletefriend",auth, contactHandler.deleteFriend);
router.post("/contactslist",auth, contactHandler.contactslistData );
router.post("/invitecontact",auth, contactHandler.invitationContact );
router.post("/updatedemandeenvoyee",auth, contactHandler.updatedemandeenvoyee);
router.post("/isinvited",auth, contactHandler.isinvited);
router.post("/getinvitattente",auth,  contactHandler.getInvitAttente);
router.post("/accepterami",auth, contactHandler.acceptationAmi,  contactHandler.accepterAmi);
router.post("/pendinginvit",auth, contactHandler.hasPendingInvit);
router.post("/getallfriends",auth, contactHandler.getAllFriends);
router.post("/createpost",auth, wallpostHandler.createNewPost)
router.post("/getuserwallpost",auth, wallpostHandler.getUserWallposts)
router.post("/haswallpost",  wallpostHandler.hasWallPost)


router.get("/logged", auth, userHandler.dataProtegee);
router.get("/contact", auth, userHandler.dataProtegee);
router.get("/user", auth, userHandler.userData);



module.exports = router;


