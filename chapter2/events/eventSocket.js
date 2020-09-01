const net = require('net');
const server = net.createServer(socket => {
	socket.once('data', data => {
		socket.write("she wrote\n");
		socket.write(data);
		console.log(...data)
		});
});
server.listen(8888);
