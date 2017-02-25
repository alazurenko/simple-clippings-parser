# simple-clippings-parser
Node module that helps parse clippings from Amazon Kindle.

## API

### parseFile (pathToFile)
Returns promise that resolves when file is parsed. Promise resolved with collection of cites.

#### Example
```javascript
const simpleClipper = require('simple-clippings-parser');
simpleClipper.parseFile('myClippings.txt').then((data) => {
  /*
  data = [{
    "book": "Book Title",
    "author": "Author Name",
    "date": "Date of Clipping",
    "quote": "Quote content"
    }]
  */
});
```
