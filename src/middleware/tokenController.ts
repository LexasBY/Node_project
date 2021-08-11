import jwt from 'jsonwebtoken'
import { publicKey } from '../../keys/keygenerator';
const { TokenExpiredError } = jwt;

const catchError = (err: any, res: any) => {
  if (err instanceof TokenExpiredError) {   
    return res.clearCookie('token').status(401).send({ message: "Unauthorized! Access Token was expired!" });    
  }
  return res.clearCookie('token').status(401).send({ message: "Unauthorized!" });  
}
const verifyToken = (req, res, next) => {
  let token = req.cookies.token;
  if (!token) {
    return res.sendStatus(401).send({ message: "You do not have token!" });
  }
  try {
    const verified  = jwt.verify(token, publicKey, { algorithm: 'RS256' }, function (err, verified) {  
    req.userId = verified.user_id
    console.log('user_id', verified.user_id);
    console.log('req.userId', req.userId);
    next()  
    })    
  } catch {
    return res.sendStatus(401).send({ message: "You have bad token!" });
  }
};

const authJwt = {
  verifyToken: verifyToken,
};
export default authJwt;
