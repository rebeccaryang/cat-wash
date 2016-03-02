'use strict';
var xlsx = require('xlsx');
var path = require('path');
var optimizer = require('./route-optimizer')

module.exports = function(filepath){
	var workbook = xlsx.readFile(path.join(__dirname,'../../data/' + filepath));
	var entries = {};
	var entryList = [];

	// Data Cleanup
	var data = workbook.Sheets.Sheet1;
	for(var key in data){
			var index = key.slice(1);
			entries[index] = entries[index] || [];
			entries[index].push(parseInt(data[key].w));
	}
	delete entries.ref;
	delete entries['1'];
	for(var key in entries){
		entryList.push({x:entries[key][0],y:entries[key][1]})
	}
	entryList.unshift({x:0,y:0})
	console.log(JSON.stringify(entryList))
	// optimizer(entries,[0,0],7);
};