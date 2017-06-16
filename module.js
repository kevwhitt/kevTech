var fs = require('fs')
var path = require('path')

module.exports = function (dir, ext, call) {
		fs.readdir(dir, function (err, data) {
			var filteredData = []
			if (err) {
				return call(err)
			}
			for (var i = 0; i < data.length; i++) {
				if (path.extname(data[i]) === '.' + ext) {
					filteredData.push(data[i])
				}
			}
			call(null, filteredData)
		})
	}
	