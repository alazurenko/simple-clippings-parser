var fs = require('fs');
var quoteParser = require('./quoteParser');
const SEPARATOR = '==========';

function parseFile(fileName) {
    return new Promise(function(resolve, reject) {
        fs.readFile(fileName, {encoding: 'utf8'}, function (err, data) {
            if (err) {
                reject(err);
                throw err;
            }

            var readData = data.split(SEPARATOR);
            readData.pop(); //remove last empty quote due to separator

            resolve(readData.map(quoteParser));
        });
    });
}

module.exports = {
    parseFile: parseFile
};


