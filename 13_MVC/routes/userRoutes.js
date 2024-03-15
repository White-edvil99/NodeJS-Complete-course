const express = require("express");
const {
  handleGetAllUsers,
  handleGetUserByID,
  handleUpdateUserByID,
  handleDeleteUserById,
  handleCreateNewUser,
} = require("../controller/userController");

// seperated isolated router
const router = express.Router();

// Route 1
router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

// Route 2
router
  .route("/:id")  //func register in a particular route
  .get(handleGetUserByID)
  .patch(handleUpdateUserByID)
  .delete(handleDeleteUserById);

module.exports = router;
