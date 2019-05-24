'use strict';

const {upperCaseText} = require('../../app/index');
const {assert} = require('chai');

describe('Uppercase All', () => {
  it('should uppercase text', () => {
    // arrange
    let testText = 'Hello World!';
    let expectedText = 'HELLO WORLD!';

    // act
    let myText = upperCaseText(testText);

    // assert
    assert.deepEqual(myText, expectedText);
  });
});