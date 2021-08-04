import express from 'express'

const router = express.Router()

router.get('/auth/:id', (req, res) => {
  return res.send('you got the Token!')
})

router.get('/post', (req, res) => {
  return res.send('list of all posts')
})

router.post('/post', (req, res) => {
  return res.send('create a new post')
})

router.get('/post/:id', (req, res) => {
  return res.send('one post from id')
})

router.put('/post/:id', (req, res) => {
  return res.send('update post from id')
})

router.delete('/post/:id', (req, res) => {
  return res.send('delete id post')
})

export { router as todoRouter}
