const { NotImplementedError } = require("../extensions/index.js");

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
function getCommonCharacterCount(s1, s2) {
  const charMap1 = new Map();
  for (const char of s1) {
    charMap1.set(char, (charMap1.get(char) || 0) + 1);
  }
  const charMap2 = new Map();
  for (const char of s2) {
    charMap2.set(char, (charMap2.get(char) || 0) + 1);
  }
  res = 0;
  for (const key of charMap1.keys()) {
    if (charMap2.get(key)) {
      const c1 = charMap1.get(key);
      const c2 = charMap2.get(key);
      res += c2 > c1 ? c1 : c2;
    }
  }
  return res;
}

module.exports = {
  getCommonCharacterCount
};
