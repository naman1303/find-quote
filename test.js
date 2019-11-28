const quote = require('./index');  
console.log(quote.getQuote());
console.log("\n------------------------------");
console.log(quote.getQuoteWithAuthor('knowledge'));
console.log("\n------------------------------");
console.log(quote.getMovieQuote());
console.log("\n------------------------------");
console.log(quote.getQuoteWithMovieName('Death'));
console.log("\n------------------------------");