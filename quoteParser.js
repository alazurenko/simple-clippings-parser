'use strict';
const jsonTransformer = require('./jsonTransformer');
const SEPARATOR = '==========';

function parseQuotes(data) {
    let readData = data.split(SEPARATOR);
    readData.pop(); //remove last empty quote due to separator

    return readData.map(parseQuote);
}

function parseQuote(quote) {
  let paragraphs = quote.split('\n')
                        .filter(filterParagraphs)
                        .map(prepareParagraph);

  return jsonTransformer(paragraphs);
}

function filterParagraphs(paragraph) {
    return paragraph !== '\r' && paragraph !== '';
}

function prepareParagraph(paragraph) {
    return paragraph.replace('\r', '');
}

module.exports = parseQuotes;
