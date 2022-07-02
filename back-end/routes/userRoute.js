const express = require('express');
const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, getUserDetails, updatePassword } = require('../controllers/userController');
const {isAuthenticatedUser, authorizeRoles} = require("../middleware/auth");
const router = express.Router();


router.route("/password/reset/:token").put(resetPassword);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/password/forgot").post(forgotPassword);

router.route("/me").get(isAuthenticatedUser, getUserDetails);

router.route("/password/update").put(isAuthenticatedUser, updatePassword);

module.exports = router;