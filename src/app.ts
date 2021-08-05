import express from 'express';
import { todoRouter } from './routes/todo';
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hi from main page!');
});

// routes
app.use(todoRouter)


app.listen(port, () => {  
  return console.log(`server is listening on ${port}`);
});
