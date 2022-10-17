const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
// 

function getCommonCharacterCount(s1, s2) {
  let arr1=s1.split('');
  let x={};
  for (let i=0; i<arr1.length; i++) {
    if (arr1[i] in x) {x[arr1[i]]++}
    else { x[arr1[i]]=1}
  } 
  
   let arr2=s2.split('');
  let y={};
  for (let i=0; i<arr2.length; i++) {
    if (arr2[i] in y) {y[arr2[i]]++}
    else { y[arr2[i]]=1}
  }
  let sum=0;
  for (let key in x) {
    if (key in y) {
      (x[key]<=y[key]) ? sum+=x[key]:sum+=y[key]}
    }
    
    return sum;
}
  

module.exports = {
  getCommonCharacterCount
};
