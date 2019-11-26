const quote = require('./index');  
console.log("Showing random quote below\n");
console.log(quote.getQuote());
console.log("Showing quote having the word knowledge\n");
console.log(quote.getQuote('knowledge')); 
console.log("\n");