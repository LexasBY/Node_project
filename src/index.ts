import express from 'express';
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import router from './routes/user.router'
import authRouter from './routes/auth.router'
import {execSync} from 'child_process'

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
app.use(authRouter)

execSync('sh ./entrypoint.sh')

mongoose.connect(DB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true
}).then(() => {  
  app.listen(port)
  console.log(`server is listening on ${port}`)
}).catch (() => console.error())
