var simpleClipper = require('./js/index');

simpleClipper.parseFile('myClippings.txt').then((data) => {
    console.log(data);
});

