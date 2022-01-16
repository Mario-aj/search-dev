const express = require('express');
const cors = require('cors');
const router = require('./routes');

const server = express();

server.use(cors());
server.use(express.json());
server.use('/api', router);

server.listen(8888, () => {
  console.log('server is running on port 8888');
});
