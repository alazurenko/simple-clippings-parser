var simpleClipper = require('./js/index');

simpleClipper.parseFile('myClippings.txt').then(function(data) {
    console.log(data);
});

