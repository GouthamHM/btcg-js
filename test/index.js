import * as assert from 'assert';
import getCurrentPrice from '../src/index';

const testSamples = [
  { input: 'USD', expectedResult: '$10000', desc: ' should return $1000' },
  { input: 'INR', expectedResult: '$10000', desc: ' should return $1000' },
  { input: '', expectedResult: null, desc: ' should return null' },
  { input: 10, expectedResult: null, desc: ' should return null' },
];

describe('Array', () => {
  testSamples.forEach((sample) => {
    it(sample.desc,() =>{
     assert.equal(getCurrentPrice(sample.input),sample.expectedResult);
   });
  });
});

