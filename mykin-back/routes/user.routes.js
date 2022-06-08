const express = require("express");
const app = express();

const userRoute = express.Router();
let User = require("../model/User");

// add a user
userRoute.route("/add-user").post((req, res, next) => {
  User.create(req.body, (error, data) => {
    if (error) {
      console.log('erreur route adduser')
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// // get all users
// userRoute.route("/").get((req, res) => {
//   User.find((error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(data);
//     }
//   });
// });

// // Get a user
// userRoute.route("/show-user/:id").get((req, res) => {
//   User.dindById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(data);
//     }
//   });
// });

// // update a user
// userRoute.route("/update-user/:id").put((req, res, next) => {
//   User.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: req.body,
//     },
//     (error, data) => {
//       if (error) {
//         console.log(error);
//         return next(error);
//       } else {
//         res.json(data);
//         console.log("User mis à jour avec succès");
//       }
//     }
//   );
// });

// // delete a User
// userRoute.route("/delete-user/:id").delete((req, res, next) => {
//   User.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         message: data,
//       });
//     }
//   });
// });

module.exports = userRoute;
