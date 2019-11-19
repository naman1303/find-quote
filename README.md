## Quote Finder
A Node.js module to fetch quotes. If an input text/string is provided the quote having that word would be returned otherwise a random quote. Input is case insensitive. 

There are separate functions to fetch a quote or "a quote with its author". Examples given below.

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

### Contribution
If you wish to add more quotes, you can send pull requests. 
Suggestions are welcome for any sort of enhancements or improvements.