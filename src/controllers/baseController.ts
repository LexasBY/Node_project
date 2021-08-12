import Post from "../../src/models/post"
import HttpStatus from 'http-status-codes'
import jwt from 'jsonwebtoken'
import { privateKey, publicKey } from "../../keys/keygenerator"


class PostController {
  async auth(req, res) {
    try {
      const user_id = req.params.id
      let payload: object = {
        user_id
      }      
      let signOptions: object = {        
        expiresIn: '24h',
        algorithm: 'RS256'
      };      
      const token = await jwt.sign(payload, privateKey, signOptions);      
      res.cookie('token', token, {httpOnly: true}).status(200).json({ message: "Logged is successfully!" });
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async create(req, res) {
    try {
      const { name } = req.body
      const user_id = req.userId     
      const post = await Post.create({name, user_id})
      console.log('post created')
      res.status(HttpStatus.OK).json(post)
    } catch (e) {
      res.status(HttpStatus.CONFLICT).json(e)
    }
  }

  async getAll(req, res) {
    try {
      const posts = await Post.find();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async getOne(req, res) {
    try {
      const user_id = req.params.id
      const post = await Post.findOne({user_id})
      if (!user_id) {
        res.status(400).json({message: 'Id не указан'})
      }     
      return res.json(post)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async update(req, res) {
    try {     
      const user_id = req.userId
        console.log('user_id from JWT', user_id)
        const name = req.body
       console.log('name from body', name)      
      if (!user_id){
        res.status(400).json({message: 'Id в токене не найден'})
      }
      const updatedPost = await Post.findOneAndUpdate({user_id}, name, {new: true})
      return res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e.message)
    }
  }

  async delete(req, res) {
      try {
        const user_id = req.params.id
        console.log('current user is',req.userId)
        console.log('user id for delete',user_id)
      if (!user_id){
        res.status(400).json({message: 'Id не указан'})
      }
      const post = await Post.findOneAndDelete({user_id})
      return res.json(post)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

export default new PostController()