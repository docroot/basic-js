const { NotImplementedError } = require("../extensions/index.js");

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
function encodeLine(str) {
  let res = "";
  let cnt = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1] && i + 1 < str.length) {
      cnt++;
    } else {
      res += (cnt > 1 ? cnt : "") + str[i];
      cnt = 1;
    }
  }

  return res;
}

module.exports = {
  encodeLine
};
