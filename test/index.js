import * as assert from 'assert';
import getCurrentPrice from '../src/index';

const testSamples = [
  { input: 'USD', expectedResult: 'USD', desc: ' should return $1000' },
  { input: 'usd', expectedResult: 'USD', desc: ' should return $1000' },
  { input: 'INR', expectedResult: 'INR', desc: ' should return $1000' }];
const failSamples = [
  { input: '', expectedResult: null, desc: ' should return null' },
  { input: 10, expectedResult: null, desc: ' should return null' },
  { input: 'bala', expectedResult: null, desc: ' should return null' },
];

describe('getCurrentPrice', () => {
  testSamples.forEach((sample) => {
    it(sample.desc, () => {
      assert.equal(getCurrentPrice(sample.input), sample.expectedResult.currency);
    });
  });
  failSamples.forEach((sample) => {
    it(sample.desc, () => {
      assert.equal(getCurrentPrice(sample.input), null);
    });
  });
});

