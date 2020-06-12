const express = require('express');

const postRouter = require('./posts/postRouter.js');
const userRouter = require('./users/userRouter.js');

const server = express();

//custom middleware
//Logs to the console everytime a request is called
function logger(req, res, next) {
  const date = new Date().toString();
  const url = req.url;
  const method = req.method;
  console.log(`${date} -- ${method} -- ${url}`);
  next();
}

server.use(logger);
server.use(express.json());
server.use('/api/posts', postRouter);
server.use('/api/users', userRouter);

server.get('/', (req, res) => {
  res.send('<Hello Deployed Heroku app please work');
});

module.exports = server;
