var jsonTransformer = require('./jsonTransformer');

function parseQuote(quote) {
    var paragraphs = quote.split('\n')
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

module.exports = parseQuote;