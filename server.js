const express = require('express');
const app = express();
const port = 3002;
const http = require('http').Server(app);
const io = require('socket.io')(http);

http.listen(port, () => {
    console.log(`Listening on port ${port}`);
    }
);


