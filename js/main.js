global.$ = $;

var walk = require('mywalk');

$(global.window.document).ready(function(){
  
  
  var start = '/Users/barnaj/Desktop';
  
  var dirResults = walk.scanDir(start);
  
  for (file of dirResults.files){
    var $newFileElement = $('<div>').addClass('file').text(file);
    $('.fileHolder').append($newFileElement);
  }
  
  for (dir of dirResults.directories){
    var $newChildFolder = $("<div>").addClass('child folderView').attr('id', dir).text(dir).append($("<br/>"));
    $('#childSection').append($newChildFolder);
    
    var childDirResults = walk.scanDir(walk.join(start, dir));
    for (file of childDirResults.files){
      var newChildFile = $("<div>").addClass("file").text(file);
      $('#' + dir).append(newChildFile);
    }
      
  }
});
  
  