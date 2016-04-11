function transform(paragraph) {
    // paragraph = [0] headings; [1] date details; [2] cite

    return Object.assign(
            getBookDetails(paragraph[0]),
            getTimeDetails(paragraph[1]),
            { quote: paragraph[2] }
        );
}

function getBookDetails(heading) {
    var head = heading.split(/[()]/);

    return {
        book: head[0].trim(),
        author: head[1] && head[1].trim()
    };
}

function getTimeDetails(time) {
    var dateOfCite = time.split('|').pop();

    return {
        date: new Date(dateOfCite.trim())
    };
}

module.exports = transform;
