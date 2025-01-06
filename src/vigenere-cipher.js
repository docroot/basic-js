const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(is_direct) {
    this.is_direct = is_direct === undefined || is_direct !== false;
  }
  encrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    const key_size = key.length;
    const text_u = text.toUpperCase();
    const key_u = key.toUpperCase();
    let res = "";
    const code_a = "A".charCodeAt(0);
    const code_z = "Z".charCodeAt(0);

    let idx = 0;
    for (let i = 0; i < text.length; i += 1) {
      let coded_char = text_u.charAt(i);
      let cur_char_code = text_u.charCodeAt(i);
      if (cur_char_code >= code_a && cur_char_code <= code_z) {
        let key_idx = idx % key_size;
        let shift = key_u.charCodeAt(key_idx) - code_a;
        coded_char = String.fromCharCode(
          code_a + ((cur_char_code - code_a + shift) % 26)
        );
        idx += 1;
      }
      if (this.is_direct) {
        res += coded_char;
      } else {
        res = coded_char + res;
      }
    }
    return res;
  }

  decrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    const key_size = key.length;
    const text_u = text.toUpperCase();
    const key_u = key.toUpperCase();
    let res = "";
    const code_a = "A".charCodeAt(0);
    const code_z = "Z".charCodeAt(0);

    let idx = 0;
    for (let i = 0; i < text.length; i += 1) {
      let decoded_char = text_u.charAt(i);
      let cur_char_code = text_u.charCodeAt(i);
      if (cur_char_code >= code_a && cur_char_code <= code_z) {
        let key_idx = idx % key_size;
        let shift = key_u.charCodeAt(key_idx) - code_a;
        decoded_char = cur_char_code - code_a - shift;
        if (decoded_char < 0) {
          decoded_char = 26 + decoded_char;
        }
        decoded_char = String.fromCharCode(code_a + decoded_char);
        idx += 1;
      }
      if (this.is_direct) {
        res += decoded_char;
      } else {
        res = decoded_char + res;
      }
    }
    return res;
  }
}

module.exports = {
  VigenereCipheringMachine
};
