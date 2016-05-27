
var arr = process.argv.splice(2, process.argv.length);
console.log(arr.map(function(e){return Number(e)}).reduce(function(a,b){return a+b}));