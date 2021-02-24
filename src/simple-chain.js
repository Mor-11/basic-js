const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push("" + value);
    return this;
  },
  removeLink(position) {
    if (position === 0 || position > this.chain.length) {
      this.chain.splice(0);
      throw "Error";
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const output = this.chain.map(e => `( ${e} )`).join('~~');
    this.chain.splice(0);
    return output;
  }
};


module.exports = chainMaker;
