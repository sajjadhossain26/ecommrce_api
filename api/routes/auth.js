import express from 'express'
import { login, logout, register, loggedInUser } from '../controllers/authController.js';
import tokenVerify from '../middlewares/verifyToken.js';

const router = express.Router()

// create route
router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').post(logout)



router.get('/me', tokenVerify, loggedInUser)

// export router
export default router;