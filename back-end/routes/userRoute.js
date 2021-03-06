const express = require('express');
const { getAllProducts } = require('../controllers/productController');
const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, getUserDetails, updatePassword, updateProfile, getAllUsers, getUser, updateUserRole, deleteProfile } = require('../controllers/userController');
const { isAuthenticatedUser, authorizeRole } = require("../middleware/auth");
const router = express.Router();


router.route("/password/reset/:token").put(resetPassword);

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").get(logoutUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/me").get(isAuthenticatedUser, getUserDetails);

router.route("/password/update").put(isAuthenticatedUser, updatePassword);

router.route("/me/update").put(isAuthenticatedUser, updateProfile);

router.route("/admin/users").get(isAuthenticatedUser, authorizeRole("admin"), getAllUsers);

router.route("/admin/user/:id").get(isAuthenticatedUser, authorizeRole("admin"), getUser)
    .put(isAuthenticatedUser, authorizeRole("admin"), updateUserRole).delete(isAuthenticatedUser, authorizeRole("admin"), deleteProfile);


module.exports = router;