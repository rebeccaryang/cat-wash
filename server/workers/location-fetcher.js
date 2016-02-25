var fs = require('fs');

exports.locationFetcher = function(filepath){
	fs.readFile(filepath, function(error, data){
		if(error){
			// TO DO: Handle Error
			console.log(error)
		} else {
			console.log(data.split('\n'));
		}
	})
}