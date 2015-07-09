global.$ = $;

var walk = require('mywalk');

$(global.window.document).ready(function(){
  var start = '/Users/barnaj/Desktop';
  walk.getFiles(start, function(fileStats){
    var $newFileElement = $('<div>').addClass('file').text(fileStats.name);
    $('.fileHolder').append($newFileElement);
  });
});
  
  