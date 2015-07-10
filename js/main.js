global.$ = $;

var DOMFactory = require('DOMFactory');
var myfs = require('myfs');
var path = require('path');

$(window.document).ready(function(){
  
  
  var start = '/Users/barnaj/Desktop'
  myfs.cd(start);
  
  window.ondragover = function(e) { e.preventDefault(); return false;  };
  window.ondrop = function(e) { e.preventDefault(); return false; };
  
  var currentDir = window.document.getElementById('currentDirectory');
  
  currentDir.ondrop = function(e){
    e.preventDefault();
    console.log(e);
    for (var i = 0; i < e.dataTransfer.files.length; i++)
      console.log(e.dataTransfer.files[i]);
    return false;
  };
  
});
  
  