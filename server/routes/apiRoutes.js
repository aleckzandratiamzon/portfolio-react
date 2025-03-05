import express from 'express';
import { addUser, loginUser } from '../controllers/userController.js';

const router = express.Router();

// Register
router.post("/addUser", addUser);

// Login
router.post("/login", loginUser);


export default router;