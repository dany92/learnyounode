var fs = require('fs');
var path=require('path');

module.exports = function (dir, ext, callback) {
  var filter = "."+ext;
  var alist = [];
  fs.readdir(dir,function(err, dir){
    if(err)
      return callback(err);
    else{
        for(var i in dir){
          if(path.extname(dir[i]) === filter){
            alist.push(dir[i]);
          }
        }
        return callback(null, alist);
    }
  });
}