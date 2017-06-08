var fs = require('fs')
var dir = process.argv[2]

fs.readFile(dir, function (err, data){
	if(err) {
		return console.log(err)
	}
	console.log(data.toString().split('\n').length - 1)
})
