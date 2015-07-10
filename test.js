var chokidar = require('chokidar');


//only this directory, ignore hidden files and folders
chokidar.watch(__dirname, {cwd: '.', depth: 0, ignored: /[\/\\]\./})
  
  
  .on('all', function(event, path) {
  console.log(event, path);
});
