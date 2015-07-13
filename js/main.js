global.$ = $;

var DOMFactory = require('DOMFactory');
var myfs = require('myfs');

var path = require('path');
var fs = require('fs');
var handleEvents = require('eventHandler');

$(window.document).ready(function(){
  
  
  var start = '/Users/barnaj/Desktop'
  myfs.cd(start);
  handleEvents();
  
});
  
  