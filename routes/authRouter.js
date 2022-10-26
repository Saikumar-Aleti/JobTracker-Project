import {
  registerUser,
  loginUser,
  updateUser,
} from "../controllers/authController.js";
import express from "express";
const router = express.Router();
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/updateUser").patch(updateUser);

export default router;
