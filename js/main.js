global.$ = $;

var DOMFactory = require('DOMFactory');
var walker = require('mywalk');
var path = require('path');

$(global.window.document).ready(function(){
  
  var start = path.resolve('C:/Users/JBarna/Desktop');
  var walk = walker(start); 
  
  //scan current directory
  var dirResults = walk.scanDir();
  
  //manage files in current directory
  for (file of dirResults.files){
    $('.fileHolder').append(DOMFactory.file(file));
  }
  
  //manage subdirectories in current directory
  for (dir of dirResults.directories){
    $('#childSection').append(DOMFactory.folderView(dir));
    
    //manage files in subdirectories
    var childDirResults = walk.scanChildDir(dir);
    for (file of childDirResults.files){
      $('#' + dir).append(DOMFactory.file(file));
    }
  }
  
  
  //scan parent directory
  var parentResults = walk.scanParentDir();
  
  //manage files in parent directory
  for (file of parentResults.files){
    $('#parentDirectory').append(DOMFactory.file(file));
  }
  
  for (dir of parentResults.directories){
    //not our current directory
    if (dir !== path.basename(start) && !dir.startsWith('.')){
      $('#parentandsibs').append(DOMFactory.folderView(dir));
      
      var siblingDirResults = walk.scanSiblingDir(dir);
      
      for (file of siblingDirResults.files){
        $('#' + dir).append(DOMFactory.file(file));
      }
    }
    
  }
});
  
  