## Quote Finder
[![Build Status][build-status-image]][build-status-url] [![Codacy Badge][badge-url]][code-quality-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependency Status](https://david-dm.org/naman1303/find-quote.svg)](https://david-dm.org/naman1303/find-quote)

A Node.js module to fetch quotes. If an input text/string is provided the quote having that word would be returned otherwise a random quote. Input is case insensitive. 

There are separate functions to fetch a quote or "a quote with its author". Examples given below in Usage section.

### Installation
```javascript
npm install find-quote --save
```

### Usage
```javascript
const quote = require('find-quote');

console.log(quote.getQuote('Imagination')); 
// Output is filtered : Imagination is more important than knowledge.
console.log(quote.getQuote('FUTURE')); 
// Output is case insensitive : I never think of the future
console.log(quote.getQuote()); 
// Output is random quote : The mind that is anxious about future events is miserable.
console.log(quote.getQuoteWithAuthor('knowledge'));
// Output is an object: { quote: 'Imagination is more important than knowledge.', author: 'Albert Einstein' }
```
### Reference
Thanks to @vinitshahdeo as I referred to quotes from his [repository][]. 

### Contribution
If you wish to add more quotes, you can send pull requests. 
Suggestions are welcome for any sort of enhancements or improvements.

[repository]: <https://github.com/vinitshahdeo/inspirational-quotes>
[build-status-image]: https://travis-ci.org/naman1303/find-quote.svg?branch=master
[badge-url]: https://api.codacy.com/project/badge/Grade/676df203e94d44af94969d094073dac9
[build-status-url]: https://travis-ci.org/naman1303/find-quote
[code-quality-url]: https://www.codacy.com/manual/naman1303/find-quote?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=naman1303/find-quote&amp;utm_campaign=Badge_Grade
[coverage-image]: https://coveralls.io/repos/github/naman1303/find-quote/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/naman1303/find-quote?branch=master