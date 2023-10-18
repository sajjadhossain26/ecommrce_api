import express from 'express'
import { login, logout, register } from '../controllers/authController.js';

const router = express.Router()

// create route
router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').post(logout)

// export router
export default router;