const events = require('events');
const net = require('net');
const channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};
channel.on('join', function(id, client) {
	this.clients[id] =client;
	this.subscriptions[id] = (senderId, message) => {
		if (id != senderId) {
			this.clients[id].write(message);
		}
	};
	this.on('broadcast', this.subscriptions[id]);
});
const server = net.createServer(client => {
	const id = `${client.remoteAdress}:${client.remotePort}`;
	channel.emit('join', id, client);
	client.on('data', data => {
		data = data.toString();
		channel.emit('broadcast', id, data);
	});
});
channel.on('leave', function()
server.listen(8888);

