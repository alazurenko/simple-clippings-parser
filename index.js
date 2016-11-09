'use strict';
const fs = require('fs');
const quoteParser = require('./js/quoteParser');

function parseFile(filePath) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filePath, { encoding: 'utf8' }, function (err, data) {

      if (err) {
          reject(err);
          throw err;
      }

      resolve(quoteParser(data));
    });
  });
}


module.exports = {
    parseFile: parseFile
};
