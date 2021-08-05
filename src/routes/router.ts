import express from 'express'
import PostController from '../../controllers/controllers'
import Post from '../../models/post'
const router = express.Router()


router.get('/auth/:id', (req, res) => {
  return res.send('you got the Token!')
})

router.get('/post', PostController.getAll)

router.post('/post', PostController.create)

router.get('/post/:id', PostController.getOne)

router.put('/post/:id', PostController.update)

router.delete('/post/:id', PostController.delete)

export default router
