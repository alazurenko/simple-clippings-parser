# simple-clippings-parser

Parse clippings from Amazon Kindle

## Install

```sh
npm i simple-clippings-parser
```

## Usage

```javascript
import { parseFile } from 'simple-clippings-parser';

await data = parseFile('myClippings.txt');
/*
data = [{
  "book": "Book Title",
  "author": "Author Name",
  "date": "Date of Clipping",
  "quote": "Quote content"
  }]
*/
```

## License

[MIT](https://opensource.org/licenses/mit-license.php)

## Contribute

Feel free to contribute
