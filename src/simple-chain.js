const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    let obj = this;
    if (this === chainMaker) {
      const newInstance = Object.create(chainMaker);
      newInstance.chain = new Array();
      obj = newInstance;
    }
    obj.chain.push(value);
    return obj;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position < 1 ||
      position > this.chain.length
    ) {
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = this.chain
      .map((element) => {
        return `( ${element} )`;
      })
      .join("~~");
    return res;
  },
};

module.exports = {
  chainMaker
};
