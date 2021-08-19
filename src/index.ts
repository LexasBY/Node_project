import express from 'express';
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import router from './routes/router'
import {execSync} from 'child_process'
import fs from 'fs'
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;
//const DB_URL: string = 'mongodb+srv://lexas:lexanby81@cluster0.p7xpx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const DB_URL: string = 'mongodb://mongo:27017/purity-db'

app.get('/', (req, res) => {
  res.send('Hi from main page!');
});

app.use(router)

mongoose.connect(DB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true
}).then(() => {  
  app.listen(port)
  console.log(`server is listening on ${port}`)  
}).then(()=>{
  console.log('script for entrypoint')
  execSync('sh ./entrypoint.sh')
}).then(()=>{
  console.log('script for keyReading')
  fs.access('keys/private.pem' && 'keys/public.pem', (err)=> {
    if (err) {
      console.log('we do not have keypair')
      return
    }
    console.log('we have keypair')
    let privateKeyPem = fs.readFileSync('keys/private.pem')
    let privateKey = privateKeyPem.toString('ascii');
    console.log('privateKey:', privateKey)
    let publicKeyPem = fs.readFileSync('keys/public.pem')
    let publicKey = publicKeyPem.toString('ascii');
    console.log('publicKey:', publicKey)    
  })  
}).catch (() => console.error())
