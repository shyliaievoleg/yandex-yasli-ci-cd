'use strict';

const {upperCaseText, lowerCaseText, firstLetter} = require('../../app/index');
const {assert} = require('chai');

describe('Changing Text', () => {
  it('should uppercase text', () => {
    // arrange
    let testText = 'Hello World!';
    let expectedText = 'HELLO WORLD!';

    // act
    let myText = upperCaseText(testText);

    // assert
    assert.deepEqual(myText, expectedText);
  });
  it('should lowercase text', () => {
    // arrange
    let testText = 'Hello World!';
    let expectedText = 'hello world!';

    // act
    let myText = lowerCaseText(testText);

    // assert
    assert.deepEqual(myText, expectedText);
  });
  it('should return first letter', () => {
    // arrange
    let testText = 'Hello World!';
    let expectedText = 'H';

    // act
    let myText = lowerCaseText(testText);

    // assert
    assert.deepEqual(myText, expectedText);
  });
});