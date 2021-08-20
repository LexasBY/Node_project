
import HttpStatus from 'http-status-codes'
import jwt from 'jsonwebtoken'
import fs from 'fs'
class AuthController {
  async auth(req, res) {
    try {
      const user_id = req.params.id
      console.log(user_id)
      let payload: object = {
        user_id
      }      
      let signOptions: object = {        
        expiresIn: '24h',
        algorithm: 'RS256'
      };

      let privateKeyPem = fs.readFileSync('keys/private.pem')
      let privateKey = privateKeyPem.toString('ascii');

      console.log('privateKey for token', privateKey)
      const token = await jwt.sign(payload, privateKey, signOptions);
      console.log('token', token)
      res.cookie('token', token, {httpOnly: true}).status(200).json({ message: "Logged is successfully!" });
    } catch (e) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(e)
    }
  }
}

export default new AuthController()