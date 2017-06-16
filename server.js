var net = require('net')
var server = net.createServer(function (socket) {
	socket.end(data)
})
server.listen(8000)

function listener(socket) {
	
date.getFullYear()
date.getMonth()
date.getDate()
date.getHours()
date.getMinutes()

}


//	var net = require('net')
//	
//	function zeroFill (i) {
//		return (i < 10 ? '0' : '') + i
//	}
//	
//	function now () {
//		var d = new Date()
//		return d.getFullYear() + '-' +
//			zeroFill(d.getMonth() + 1) + '-' +
//			zeroFill(d.getDate()) + ' ' +
//			zeroFill(d.getHours()) + ':' +
//			zeroFill(d.getMinutes())
//	}
//	
//	var server = net.createServer(function (socket) {
//		socket.end(now() + '\n')
//	})
//	
//	server.listen(Number(process.argv[2]))