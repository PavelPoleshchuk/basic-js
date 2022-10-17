const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
// function encodeLine(/* str */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function encodeLine(str) {
  const arr=str.split('');
  const arrFin=[];
  let n=1;
  for (let i=0; i<arr.length; i++){
     if (arr[i]===arr[i+1]) {
       n++ 
       continue;
     } else if(n===1) {
         arrFin.push(arr[i])
       } else {
           arrFin.push(`${n+arr[i]}`)
           n=1;
         }
   }
   return arrFin.join('')
 }

module.exports = {
  encodeLine
};
