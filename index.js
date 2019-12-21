#!/usr/bin/env node
/**
* Print the current date and time
*
* @return {String}
*/

"use strict";
var genericQuoteList = require('./data/generic-quotes.json');
var moviesQuoteList = require('./data/movies-quotes.json');
var seriesQuoteList = require('./data/series-quotes.json');
var _ = require("underscore");
const chalkAnimation = require('chalk-animation');
var inputEmotion = "";
var matchingQuote = "";
var genericQuoteListLength = "";
var moviesQuoteListLength = "";
var seriesQuoteListLength = "";
var index = 0;
var genericQuoteObject = { "quote": "", "author": "" };
var moviesQuoteObject = { "quote": "", "movie": "" };
var seriesQuoteObject = { "quote": "", "series": "" };
genericQuoteListLength = Object.keys(genericQuoteList).length;
moviesQuoteListLength = Object.keys(moviesQuoteList).length;
seriesQuoteListLength = Object.keys(seriesQuoteList).length;
module.exports = {
    getQuote: function (inpString) {
        if (inpString) {
            var string = inpString.replace(/^\s+|\t+|\s+$/g, "");
            inputEmotion = string.toLowerCase().replace(/\s+/g, " ");
            _.each(genericQuoteList, function (quote) {
                if (quote.text.toLowerCase().includes(inputEmotion)) {
                    matchingQuote = quote.text;
                    return; 
                }
            });
        } else {
            matchingQuote = getRandomQuote(genericQuoteListLength, genericQuoteList);
        }
        return matchingQuote;
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
                genericQuoteObject = getRandomQuoteWithDetails('G');
            }
        }
        else {
            genericQuoteObject = getRandomQuoteWithDetails('G');
        }
        return genericQuoteObject;
    },

    getMovieQuote: function (inpString) {
        if (inpString) {
            inputEmotion = inpString.toLowerCase().trim();
            _.each(moviesQuoteList, function (quote) {
                if (quote.text.toLowerCase().includes(inputEmotion)) {
                    matchingQuote = quote.text;
                    return;
                }
            });
        } else {
            matchingQuote = getRandomQuote(moviesQuoteListLength, moviesQuoteList);
        }
        return matchingQuote;
    },

    getQuoteWithMovieName: function (inpString) {
        if (inpString) {
            inputEmotion = inpString.toLowerCase().trim();
            _.each(moviesQuoteList, function (quote) {
                if (quote.text.toLowerCase().includes(inputEmotion)) {
                    moviesQuoteObject.quote = quote.text;
                    moviesQuoteObject.movie = quote.from;
                    return;
                }
            });
            if (moviesQuoteObject.quote === "") {
                moviesQuoteObject = getRandomQuoteWithDetails('M');
            }
        } else {
            moviesQuoteObject = getRandomQuoteWithDetails('M');
        }
        return moviesQuoteObject;
    },

    getSeriesQuote: function (inpString) {
        if (inpString) {
            inputEmotion = inpString.toLowerCase().trim();
            _.each(seriesQuoteList, function (quote) {
                if (quote.text.toLowerCase().includes(inputEmotion)) {
                    matchingQuote = quote.text;
                    return;
                }
            });
        } else {
            matchingQuote = getRandomQuote(seriesQuoteListLength, seriesQuoteList);
        }
        return matchingQuote;
    },

    getQuoteWithSeriesName: function (inpString) {
        if (inpString) {
            inputEmotion = inpString.toLowerCase().trim();
            _.each(seriesQuoteList, function (quote) {
                if (quote.text.toLowerCase().includes(inputEmotion)) {
                    seriesQuoteObject.quote = quote.text;
                    seriesQuoteObject.series = quote.from;
                    return;
                }
            });
            if (seriesQuoteObject.quote === "") {
                seriesQuoteObject = getRandomQuoteWithDetails('S');
            }
        } else {
            seriesQuoteObject = getRandomQuoteWithDetails('S');
        }
        return seriesQuoteObject;
    },

    displayQuote: function (animationType) {
        if (animationType) {
            getAnimationType(animationType)(getRandomQuote(genericQuoteListLength, genericQuoteList));
        }
        else {
            chalkAnimation.rainbow(getRandomQuote(genericQuoteListLength, genericQuoteList));
        }
    },

    displayMovieQuote: function (animationType) {
        if (animationType) {
            getAnimationType(animationType)(getRandomQuoteWithDetails('M').quote);
        }
        else {
            chalkAnimation.rainbow(getRandomQuoteWithDetails('M').quote);
        }
    },

    displaySeriesQuote: function (animationType) {
        if (animationType) {
            getAnimationType(animationType)(getRandomQuoteWithDetails('S').quote);
        }
        else {
            chalkAnimation.rainbow(getRandomQuoteWithDetails('S').quote);
        }
    }
}

function getAnimationType(animationType) {
    if (animationType == '' || animationType.toLowerCase() == 'rainbow') {
        return chalkAnimation.rainbow;
    }
    else if (animationType.toLowerCase() == 'pulse') { return chalkAnimation.pulse }
    else if (animationType.toLowerCase() == 'karaoke') { return chalkAnimation.karaoke }
    else if (animationType.toLowerCase() == 'neon') { return chalkAnimation.neon }
    else if (animationType.toLowerCase() == 'radar') { return chalkAnimation.radar }
    else if (animationType.toLowerCase() == 'glitch') { return chalkAnimation.glitch }
    else return chalkAnimation.rainbow;
}
function getRandomQuote(listLength, quoteList) {
    index = randomInt(0, listLength - 1);
    matchingQuote = quoteList[index].text;
    return matchingQuote;
}

function getRandomQuoteWithDetails(quoteType) {
    if (quoteType === 'M') {
        // Movie quote
        index = randomInt(0, moviesQuoteListLength - 1);
        moviesQuoteObject.quote = moviesQuoteList[index].text;
        moviesQuoteObject.movie = moviesQuoteList[index].from;
        return moviesQuoteObject;
    } else if (quoteType === 'S') {
        // Series quote
        index = randomInt(0, seriesQuoteListLength - 1);
        seriesQuoteObject.quote = seriesQuoteList[index].text;
        seriesQuoteObject.movie = seriesQuoteList[index].from;
        return seriesQuoteObject;
    } else {
        // Generic quote
        index = randomInt(0, genericQuoteListLength - 1);
        genericQuoteObject.quote = genericQuoteList[index].text;
        genericQuoteObject.author = genericQuoteList[index].from;
        return genericQuoteObject;
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
