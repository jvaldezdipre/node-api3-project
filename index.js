// code away!
const server = require('./server.js');

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`\n We LIVEEEEEEE HELLLOOOO World on port ${port} \n`);
});
