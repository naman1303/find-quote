#!/usr/bin/env node
/**
* Print the current date and time
*
* @return {String}
*/

"use strict";
var genericQuoteList = require('./data/generic-quotes.json');
var movieQuoteList = require('./data/movies-quotes.json');
var _ = require("underscore");
var inputEmotion = "";
var matchingQuote = "";
var genericQuoteListLength = "";
var movieQuoteListLength = "";
var index = 0;
var genericQuoteObject = { "quote": "", "author": "" };
var movieQuoteObject = { "quote": "", "movie": "" };
genericQuoteListLength = Object.keys(genericQuoteList).length;
movieQuoteListLength = Object.keys(movieQuoteList).length;
module.exports = {
    getQuote: function (inpString) {
        if (inpString) {
            inputEmotion = inpString.toLowerCase().trim();
            _.each(genericQuoteList, function (quote) {
                if (quote.text.toLowerCase().includes(inputEmotion)) {
                    matchingQuote = quote.text;
                    return;
                }
            });
        } else {
            matchingQuote = getRandomQuote(genericQuoteListLength,genericQuoteList);
        }
        return matchingQuote;
    },

    getMovieQuote: function (inpString) {
        if (inpString) {
            inputEmotion = inpString.toLowerCase().trim();
            _.each(movieQuoteList, function (quote) {
                if (quote.text.toLowerCase().includes(inputEmotion)) {
                    matchingQuote = quote.text;
                    return;
                }
            });
        } else {
            matchingQuote = getRandomQuote(movieQuoteListLength,movieQuoteList);
        }
        return matchingQuote;
    },

    getQuoteWithMovieName: function (inpString) {
        if (inpString) {
            inputEmotion = inpString.toLowerCase().trim();
            _.each(movieQuoteList, function (quote) {
                if (quote.text.toLowerCase().includes(inputEmotion)) {
                    movieQuoteObject.quote = quote.text;
                    movieQuoteObject.movie = quote.from;
                    return;
                }
            });
            if (movieQuoteObject.quote === "") {
                movieQuoteObject = getRandomQuoteWithMovieName();
            }
        } else {
            movieQuoteObject = getRandomQuoteWithMovieName();
        }
        return movieQuoteObject;
    },

    getQuoteWithAuthor: function (inpString) {
        if (inpString) {
            inputEmotion = inpString.toLowerCase().trim();
            _.each(genericQuoteList, function (quote) {
                if (quote.text.toLowerCase().includes(inputEmotion)) {
                    genericQuoteObject.quote = quote.text;
                    genericQuoteObject.author = quote.from;
                    return;
                }
            });
            if (genericQuoteObject.quote === "") {
                genericQuoteObject = getRandomQuoteWithAuthor();
            }
        }
        else {
            genericQuoteObject = getRandomQuoteWithAuthor();
        }
        return genericQuoteObject;
    }
}

function getRandomQuote(listLength, quoteList) {
    index = randomInt(0, listLength - 1);
    matchingQuote = quoteList[index].text;
    return matchingQuote;
}

function getRandomQuoteWithAuthor() {
    index = randomInt(0, genericQuoteListLength - 1);
    genericQuoteObject.quote = genericQuoteList[index].text;
    genericQuoteObject.author = genericQuoteList[index].from;
    return genericQuoteObject;
}

function getRandomQuoteWithMovieName() {
    index = randomInt(0, movieQuoteListLength - 1);
    movieQuoteObject.quote = movieQuoteList[index].text;
    movieQuoteObject.movie = movieQuoteList[index].from;
    return movieQuoteObject;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
