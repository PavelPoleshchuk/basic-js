const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
// function getEmailDomain(/* email */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
function getEmailDomain(email) {
  const pos=email.split('').reverse().indexOf('@')
  return email.split('').slice(-pos).join('')
}

module.exports = {
  getEmailDomain
};
