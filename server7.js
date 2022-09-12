const express = require('express');

const postRouter = require('./modules/posts/post.route');
const { dbConnect } = require('./config/dbConnect');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to my server. Use /post to get all routes');
});
app.use('/post', postRouter);

async function start() {
  await dbConnect();
}
async function start() {
  app.listen(4000, (err) => console.log('Server listening on port: ', 4000));
}
start();
