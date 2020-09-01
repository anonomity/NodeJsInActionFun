const net = require('net')

const EventEmitter = require('events').EventEmitter;
const channel = new EventEmitter();
channel.on('join', () => {
	  console.log('Welcome!');
});

const server = net.createServer(socket => {
	socket.once('data', data => {
		channel.emit('join');
	});
});

server.listen(8888);
