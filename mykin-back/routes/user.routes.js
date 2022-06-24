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
router.get("/invitecontact/:id/:param", auth,  contactHandler.invitationContact )


module.exports = router;


