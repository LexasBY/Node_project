import jwt from 'jsonwebtoken'
import fs from 'fs'
import HttpStatus from 'http-status-codes'

const verifyToken = (req, res, next) => {
  let token = req.cookies.token;
  if (!token) {
    return res.sendStatus(401).send({ message: "You do not have token!" });
  }
  try {
    let publicKeyPem = fs.readFileSync('keys/public.pem')
    let publicKey = publicKeyPem.toString('ascii');
    console.log('publicKey in func:', publicKey)
    const veryfied = jwt.verify(token, publicKey, { algorithm: 'RS256' }, function (err, verified) {  
    req.userId = verified.user_id
    console.log('user_id', verified.user_id);
    console.log('req.userId', req.userId);
    next()  
    })    
  } catch {
    return res.sendStatus(HttpStatus.UNAUTHORIZED).send({ message: "You have bad token!" });
  }
};

const authJwt = {
  verifyToken: verifyToken,
};
export default authJwt;
