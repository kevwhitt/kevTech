var fs = require('fs')
var path = require('path')
var dir = process.argv[2]
var ext = process.argv[3]

module.export = fs.readdir(dir, function (err, data) {
	if (err) {
		return console.log(err)
	}
	for (var i = 0; i < data.length; i++) {
		if (path.extname(data[i]) === '.' + ext) {
			console.log(data[i].toString())
		}
	}
})
