# simple-clippings
Node module that helps parse clippings made by Kindle.

## API

- **parseFile (fileName)** - promise that return pased data in JSON 
```json
[{
    "book": "Book Title",
    "author": "Author Name",
    "date": "Date of Clipping",
    "quote": "Quote content",
}]
```



#### Example
```javacript
var simpleClipper = require('simple-clippings');
simpleClipper.parseFile('myClippings.txt').then((data) => {
    //parsed data
});
```