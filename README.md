## Quote Finder &nbsp;<img src="images/rainbow.PNG" style="width:7%" alt="Rainbow">

<h1><img src="images/quote.PNG" alt="Django Unchained"></h1>


[![Build Status][build-status-image]][build-status-url] [![Codacy Badge][badge-url]][code-quality-url] [![Dependency Status][dependency-status-badge]][dependency-status-url] [![Downloads][total-download]](https://www.npmjs.com/package/find-quote) ![Install Size][install-size-url] ![Last Commit][last-commit-url] [![Known Vulnerabilities][vulnerability-badge]][vulnerability-url]

<br>

> Find your favorite quote using a search string or simply enjoy a nice one generated randomly.

<br>

<span style="color: red">** What’s new in latest version? - Added Rainbow styled display of quotes. </span>

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

### Rainbow Display 

[chalk-animation][] package has been used to display a quote in Rainbow style. No explicit console or print is needed, just call the functions as mentioned below.

![Expected Output](https://raw.githubusercontent.com/naman1303/images/master/rainbow_quote.PNG)

<span style="color: red">** Limitation - Last display output overwrites all previous displays. </span>

```javascript
const quote = require('find-quote');
quote.displayQuote();
quote.displayMovieQuote();
quote.displaySeriesQuote();
```

Note: You can also pass below animations (supported by chalk-animation) explicitly as input:

    1. rainbow  2. pulse   3. glitch   4. radar   5. neon   6. karaoke

    For example:  quote.displayQuote('glitch');

### Reference
I have referred to this [repository][] for the quotes.

### Contribution
If you wish to add more quotes, you can send pull requests. 
Suggestions are welcome for any sort of enhancements or improvements.

[chalk-animation]: <https://www.npmjs.com/package/chalk-animation>
[repository]: <https://github.com/vinitshahdeo/inspirational-quotes>
[dependency-status-badge]: https://david-dm.org/naman1303/find-quote.svg
[dependency-status-url]: https://david-dm.org/naman1303/find-quote
[build-status-image]: https://travis-ci.org/naman1303/find-quote.svg?branch=master
[badge-url]: https://api.codacy.com/project/badge/Grade/676df203e94d44af94969d094073dac9
[build-status-url]: https://travis-ci.org/naman1303/find-quote
[code-quality-url]: https://www.codacy.com/manual/naman1303/find-quote?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=naman1303/find-quote&amp;utm_campaign=Badge_Grade
[coverage-image]: https://coveralls.io/repos/github/naman1303/find-quote/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/naman1303/find-quote?branch=master
[vulnerability-badge]: https://snyk.io/test/github/naman1303/find-quote/badge.svg
[vulnerability-url]:https://snyk.io/test/github/naman1303/find-quote
[last-commit-url]: https://badgen.net/github/last-commit/naman1303/find-quote
[total-download]: https://badgen.net/npm/dt/find-quote
[install-size-url]: https://badgen.net/packagephobia/install/find-quote