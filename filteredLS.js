var fs = require('fs');
var path=require('path');
var filter = "."+process.argv[3];
var callback = function(err, list){
	for (var i in list){
		if(path.extname(list[i]) === filter){
			console.log(list[i]);
		}
	}
}
fs.readdir(process.argv[2], callback);