import express from 'express';
import mongoose from 'mongoose'
import router from './routes/router'
const app = express();
const port = 3000;
const DB_URL: string = 'mongodb+srv://NAME:PASSWORDFORCLUSTER@cluster0.p7xpx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

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
