const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser); //USADA
router.get("/profile/:userId", userController.getUserDataByUserId);
router.get("/:userId/solicitudes", userController.listSolicitudesByUserId); //USADA

module.exports = router;