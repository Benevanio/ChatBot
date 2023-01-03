const express = require('express');
const app = express();
const port = 3002;
const http = require('http').Server(app);
const io = require('socket.io')(http);
app.use(express.static(__dirname + '/public'));
http.listen(port, () => {
    console.log(`Listening on port ${port}`);
    }
);
app.get('/', (req,res,next) => {
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', (socket) => {
    console.log('User connected' + socket.id);
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
    
});
