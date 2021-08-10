import express from 'express';
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import router from './routes/router'
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;
const DB_URL: string = 'mongodb+srv://lexas:lexanby81@cluster0.p7xpx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hi from main page!');
});

// routes
app.use(router)


async function startApp() {
  try{
    await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
    app.listen(port, () => {  
      return console.log(`server is listening on ${port}`);
    });
  } catch (e) {
    console.log(e)
  }
}

startApp()
