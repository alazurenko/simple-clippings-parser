var simpleClipper = require('./js/index');
var fs = require('fs');


simpleClipper.parseFileToJson('newClips.txt', 'tt').then(function() {
    console.log('callaback');
});