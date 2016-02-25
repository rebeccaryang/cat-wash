var xlsx = require('xlsx');
var path = require('path');

module.exports = function(filepath){
	var workbook = xlsx.readFile(path.join(__dirname,'../../data/' + filepath));
	var entries = {};

	// Data Cleanup
	var data = workbook.Sheets.Sheet1;
	for(var key in data){
			var index = key.slice(1);
			entries[index] = entries[index] || [];
			entries[index].push(parseInt(data[key].w))
	};
	delete entries['ref'];
	delete entries['1'];
	console.log(entries);
};