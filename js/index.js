var fs = require('fs');
var quoteParser = require('./quoteParser');
const SEPARATOR = '==========';

function parseFile(fileName) {
    return new Promise(function(resolve, reject) {
        fs.readFile(fileName, { encoding: 'utf8' }, function (err, data) {
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

function parseFileToJson(fileName, jsonName) {
    return parseFile(fileName).then(function(data) {
        writeToJSON(jsonName + '.json', data);
    });
}

function writeToJSON(fileName, data) {
    return new Promise(function(resolve, reject) {
        fs.writeFile(fileName, JSON.stringify(data), function() {
            resolve();
        });
    });
}

module.exports = {
    parseFileToJson: parseFileToJson
};


