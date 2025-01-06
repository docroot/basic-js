const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addition = "";
  let repeat = 1;
  let separator = "+";
  if (options !== undefined) {
    if ("addition" in options) {
      let repeat = 1;
      let add_separator = "|";
      if ("additionRepeatTimes" in options) {
        repeat = options.additionRepeatTimes;
      }
      if ("additionSeparator" in options) {
        add_separator = options.additionSeparator;
      }
      addition = Array(repeat)
        .fill("" + options.addition)
        .join(add_separator);
    }
    if ("repeatTimes" in options) {
      repeat = options.repeatTimes;
    }
    if ("separator" in options) {
      separator = options.separator;
    }
  }
  let element = str + addition;
  return Array(repeat).fill(element).join(separator);
}

module.exports = {
  repeater
};
