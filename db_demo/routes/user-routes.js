import { Router } from "express";
import { createUser, deleteAllUsers, deleteUserById, getAllUsers, getUserById, updateEmail, updatePassword, updateUser, updateUsername } from "../controllers/user-controllers.js";

const router = Router();

// GET Routes
router.get('/', getAllUsers);
router.get('/:id', getUserById);

// POST Routes
router.post('/', createUser);

// PUT Routes
router.put('/:id', updateUser);

// PATCH Routes
router.patch('/:id/username', updateUsername);
router.patch('/:id/password', updatePassword);
router.patch('/:id/email', updateEmail);

// DELETE Routes
router.delete('/', deleteAllUsers);
router.delete('/:id', deleteUserById);

export default router;