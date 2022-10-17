const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
// function deleteDigit(/* n */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function deleteDigit(n) {
  const arr=(n+'').split('')
  const set=[];
  for (i=0; i<arr.length; i++) {
    const x=arr.concat()
      x.splice(i,1)
    set.push(+x.join(''));
  }
return Math.max(...set);
}

module.exports = {
  deleteDigit
};
