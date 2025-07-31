import express from "express";
import {
  getAllUser,
  getUserById,
  loginUser,
  registerUser,
} from "../controllers/authControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", authMiddleware, getAllUser);
router.get("/users/:id", authMiddleware, getUserById);

export default router;
