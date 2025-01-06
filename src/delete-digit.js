const { NotImplementedError } = require("../extensions/index.js");

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
function deleteDigit(n) {
  let digits = n.toString().split("");
  let max = 0;
  for (let i = 0; i < digits.length; i++) {
    let tmp = Array.from(digits);
    tmp.splice(i, 1);
    let n = Number.parseInt(tmp.join(""));
    if (n > max) {
      max = n;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
