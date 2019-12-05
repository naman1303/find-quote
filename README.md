## Quote Finder

<h1><img src="images/quote.PNG" alt="Django Unchained"></h1>


[![Build Status][build-status-image]][build-status-url] [![Codacy Badge][badge-url]][code-quality-url] [![Dependency Status](https://david-dm.org/naman1303/find-quote.svg)](https://david-dm.org/naman1303/find-quote) [![Downloads](https://badgen.net/npm/dt/find-quote)](https://www.npmjs.com/package/find-quote) ![Install Size](https://badgen.net/packagephobia/install/find-quote) ![Last Commit](https://badgen.net/github/last-commit/naman1303/find-quote) [![Known Vulnerabilities](https://snyk.io/test/github/naman1303/find-quote/badge.svg)](https://snyk.io/test/github/naman1303/find-quote)

<br>

> Find your favorite quote using a search string or simply enjoy a nice one generated randomly.

<br>

<span style="color: red">** What’s new in latest version? - Added quotes from famous series as well. </span>

A Node.js module to fetch quotes - generic, from movies and from series. 
If an input text/string is provided the quote having that word would be returned otherwise a random quote. Input is case insensitive. 

There are variety of functions to fetch quotes. Examples given below.

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

console.log(quote.getMovieQuote());
// Output is random movie quote : May the Force be with you.

console.log(quote.getQuoteWithMovieName('Death'));
// Output is an object: { quote: 'Remember that all worlds draw to an end and that noble death is a treasure which no one is too poor to buy.', movie: 'The Chronicles of Narnia' }

console.log(quote.getSeriesQuote());
// Output is random series quote : When you play the Game of Thrones, you win or you die.

console.log(quote.getQuoteWithSeriesName('brave'));
// Output is an object: { quote: 'The only time a man can be brave is when he’s afraid.', series: 'Game of Thrones' }

```

### Reference
I have referred to this [repository][] for the quotes.

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
