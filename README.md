# simple-clippings
Node module that helps parse clippings from Kindle.

## API

- **parseFile (filePath)** - returns promise that resolves when file is parsed.
```json
[{
    "book": "Book Title",
    "author": "Author Name",
    "date": "Date of Clipping",
    "quote": "Quote content",
}]
```


#### Example
```javascript
var simpleClipper = require('simple-clippings');
simpleClipper.parseFile('myClippings.txt').then(callback);
```