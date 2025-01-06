const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const counts = new Map();
  const result = [];

  for (const name of names) {
    if (counts.get(name) === undefined) {
      result.push(name);
      counts.set(name, 1);
    } else {
      let suffix = counts.get(name);
      let nname = `${name}(${suffix})`;

      while (counts.get(nname) !== undefined) {
        suffix++;
        nname = `${name}(${suffix})`;
      }

      result.push(nname);
      counts.set(nname, 1);
      counts.set(name, counts.get(name) + 1);
    }
  }

  return result;
}

module.exports = {
  renameFiles
};
