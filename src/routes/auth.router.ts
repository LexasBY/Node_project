import express from 'express'
import authController from '../controllers/authController'
const authRouter = express.Router()

authRouter.post('/auth/:id', authController.auth)

export default authRouter