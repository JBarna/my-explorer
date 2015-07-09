global.$ = $;

var walk = require('mywalk');
var path = require('path');

$(global.window.document).ready(function(){
  
  var start = '/Users/barnaj/Desktop';
  
  //scan current directory
  var dirResults = walk.scanDir(start);
  
  //manage files in current directory
  for (file of dirResults.files){
    var $newFileElement = $('<div>').addClass('file').text(file);
    $('.fileHolder').append($newFileElement);
  }
  
  //manage subdirectories in current directory
  for (dir of dirResults.directories){
    var $newChildFolder = $("<div>").addClass('child folderView').attr('id', dir).text(dir).append($("<br/>"));
    $('#childSection').append($newChildFolder);
    
    //manage files in subdirectories
    var childDirResults = walk.scanChildDir(start, dir);
    for (file of childDirResults.files){
      var newChildFile = $("<div>").addClass("file").text(file);
      $('#' + dir).append(newChildFile);
    }
  }
  
  
  //scan parent directory
  var parent = "/Users/barnaj/";
  var parentResults = walk.scanDir(parent);
  
  console.log(parentResults);
  
  //manage files in parent directory
  for (file of parentResults.files){
    var $newFileElement = $('<div>').addClass('file').text(file);
    $('#parentDirectory').append($newFileElement);
  }
  
  for (dir of parentResults.directories){
    //not our current directory
    if (dir !== path.basename(start) && !dir.startsWith('.')){
      var $newChildFolder = $("<div>").addClass('sibling folderView').attr('id', dir).text(dir).append($("<br/>"));
      $('#parentandsibs').append($newChildFolder);
      
      var siblingDirResults = walk.scanDir(path.join(parent, dir));
      
      for (file of siblingDirResults.files){
        var $newFileElement = $('<div>').addClass('file').text(file);
        $('#' + dir).append($newFileElement);
      }
    }
    
  }
});
  
  