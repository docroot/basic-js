const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  const res = [];
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let was_discarded = false;
  for (let i = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
      case "--discard-next":
        was_discarded = true;
        i += 1;
        break;
      case "--discard-prev":
        if (i > 0 && !was_discarded) {
          res.pop();
        }
        was_discarded = false;
        break;
      case "--double-next":
        if (i + 1 < arr.length) {
          res.push(arr[i + 1]);
        }
        was_discarded = false;
        break;
      case "--double-prev":
        if (i > 0 && !was_discarded) {
          res.push(arr[i - 1]);
        }
        was_discarded = false;
        break;
      default:
        was_discarded = false;
        res.push(arr[i]);
    }
  }
  return res;
}

module.exports = {
  transform
};
