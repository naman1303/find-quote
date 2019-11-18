#!/usr/bin/env node
/**
* Print the current date and time
*
* @return {String}
*/

"use strict";
var quoteList = require('./data/quotes-list.json');
var _ = require('underscore');
var inputEmotion = "";
var matchingQuote = "";
module.exports.getQuote = function (options) {
    if (options) {
        inputEmotion = options.toLowerCase();
        _.each(quoteList, function (quote) {
            if(quote.text.toLowerCase().includes(inputEmotion)){
                matchingQuote = quote.text;
                return;
            }
        });
    }
    else {
        var maxLength = Object.keys(quoteList).length;
        var index = randomInt(0, maxLength -1);
        matchingQuote = quoteList[index].text;
    }
    return matchingQuote;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}