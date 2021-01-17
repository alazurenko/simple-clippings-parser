'use strict';
import { transform } from './jsonTransformer.js';
const SEPARATOR = '==========';

export function parseQuotes(data) {
  let readData = data.split(SEPARATOR);
  readData.pop(); //remove last empty quote due to separator

  return readData.map(parseQuote);
}

function parseQuote(quote) {
  let paragraphs = quote.split('\n')
                        .filter(filterParagraphs)
                        .map(prepareParagraph);

  return transform(paragraphs);
}

function filterParagraphs(paragraph) {
  return paragraph !== '\r' && paragraph !== '';
}

function prepareParagraph(paragraph) {
  return paragraph.replace('\r', '');
}

// module.exports = parseQuotes;
