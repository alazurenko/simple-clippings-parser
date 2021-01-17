import { readFile } from "fs";
import { parseQuotes } from "./utils/quoteParser.js";

function parseFile(filePath) {
  return new Promise(function (resolve, reject) {
    readFile(filePath, { encoding: "utf8" }, function (err, data) {
      if (err) {
        reject(err);
      }

      resolve(parseQuotes(data));
    });
  });
}

module.exports = { parseFile };
