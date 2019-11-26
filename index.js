#!/usr/bin/env node
/**
* Print the current date and time
*
* @return {String}
*/

"use strict";
var quoteList = require('./data/quotes-list.json');
var _ = require("underscore");
var inputEmotion = "";
var matchingQuote = "";
var quoteListLength = "";
var index = 0;
var quoteObject = { "quote": "", "author": "" };
quoteListLength = Object.keys(quoteList).length;

module.exports = {
    getQuote: function (options) {
        if (options) {
            inputEmotion = options.toLowerCase();
            _.each(quoteList, function (quote) {
                if (quote.text.toLowerCase().includes(inputEmotion)) {
                    matchingQuote = quote.text;
                    return;
                }
            });
        } else {
            matchingQuote = getRandomQuote();
        }
        return matchingQuote;
    },

    getQuoteWithAuthor: function (inpString) {
        if (inpString) {
            inputEmotion = inpString.toLowerCase().trim();
            _.each(quoteList, function (quote) {
                if (quote.text.toLowerCase().includes(inputEmotion)) {
                    quoteObject.quote = quote.text;
                    quoteObject.author = quote.from;
                    return;
                }
            });
            if (quoteObject.quote === "") {
                quoteObject = getRandomQuoteWithAuthor();
            }
        }
        else {
            quoteObject = getRandomQuoteWithAuthor();
        }
        return quoteObject;
    }
}

function getRandomQuote() {
    index = randomInt(0, quoteListLength - 1);
    matchingQuote = quoteList[index].text;
    return matchingQuote;
}

function getRandomQuoteWithAuthor() {
    index = randomInt(0, quoteListLength - 1);
    quoteObject.quote = quoteList[index].text;
    quoteObject.author = quoteList[index].from;
    return quoteObject;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
