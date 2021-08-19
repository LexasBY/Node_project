import express from 'express'
import baseController from '../controllers/baseController'
import authJwt from '../middleware/authJwt'
const router = express.Router()


router.post('/auth/:id', baseController.auth)

router.get('/post', baseController.getAll)

router.post('/post', [authJwt.verifyToken], baseController.create)

router.get('/post/:id', baseController.getOne)

router.put('/post/:id', [authJwt.verifyToken], baseController.update)

router.delete('/post/:id', [authJwt.verifyToken], baseController.delete)

export default router
