'use strict'

function upperCaseText(text) {
  return text.toUpperCase();
};

function lowerCaseText(text) {
  return text.toLowerCase();
};

function firstLetter(text) {
  return text.slice(0, 1);
};

module.exports = {upperCaseText, lowerCaseText, firstLetter};