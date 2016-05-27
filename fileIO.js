var fs = require('fs');
var buff = fs.readFileSync(process.argv[2]);
var count = buff.toString().split('\n').length;
console.log(count-1);