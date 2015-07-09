global.$ = $;

var walk = require('mywalk');

$(global.window.document).ready(function(){
  
  
  var start = '/Users/barnaj/Desktop';
  walk.getFiles(start, function(fileStats){
    var $newFileElement = $('<div>').addClass('file').text(fileStats.name);
    $('.fileHolder').append($newFileElement);
  });
  
  var childHandle = walk.getChildDirectories(start, function(directoryStat){
    console.log(directoryStat.name);
    childHandle.getFiles(directoryStat, function(fileStats){
      console.log(directoryStat.name + ": " + fileStats.name);
    });
  });
    
  
});
  
  