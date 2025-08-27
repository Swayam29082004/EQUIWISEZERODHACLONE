const express = require("express");
const router = express.Router();

// ✅ Import Signup & Login
const { Signup, Login } = require("../Controllers/AuthController");

// ✅ Import userVerification
const { userVerification } = require("../Middlewares/AuthMiddleware");

// Routes
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/verify", userVerification);

module.exports = router;
