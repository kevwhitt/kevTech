var dir = process.argv[2]
var ext = process.argv[3]
var filter = require('./module.js')

filter(dir, ext, function (err, data) {
	if (err) {
		return(err)
	}
	for (var i = 0; i < data.length; i++)
		console.log(data[i])
	})
