## Quote Finder
A Node.js module that returns quotes randomly or filtered based on input text/string. 
Input is considered case insensitive. 

### Installation
npm install find-quote --save

### Usage
```javascript
const quote = require('find-quote');

console.log(quote.getQuote('Imagination')); 
// Filtered Output : Imagination is more important than knowledge.
console.log(quote.getQuote('FUTURE')); 
// Case insensitive Output : I never think of the future
console.log(quote.getQuote()); 
// Random Output : The mind that is anxious about future events is miserable.
```

### Contribution
You are more than welcome to contribute.
