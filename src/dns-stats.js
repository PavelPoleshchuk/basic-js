const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
// function getDNSStats(/* domains */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function getDNSStats(domains) {
  const obj = {};

  for (let domain of domains) {
    
    while (domain) {
      const subDomain = "." + domain.split(".").reverse().join(".");
      
      const dotIndx = domain.indexOf(".");

      obj[subDomain] = (obj[subDomain] || 0) + 1;
      if (dotIndx !== - 1) {
        domain = domain.slice(dotIndx + 1)
      } else {
        domain = ""
      }
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
