const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  direct = true;
  constructor(type) {
    if (type === false) {
      this.direct = false;
    }
  }
  encrypt(message, key) {
    if (message == "" || key == "") throw new Error("lack of arguments");
    message = message.toUpperCase();
    key = key.toUpperCase();
    let Arr = [];
    for (let i = 0, j = 0; i < message.length; i++) {
      if (j == key.length) j = 0;
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        let ch = (message.charCodeAt(i) - 65 + key.charCodeAt(j) - 65) % 26;
        Arr.push(String.fromCharCode(ch + 65));
        j++;
      } else {
        Arr.push(message[i]);
      }
    }
    if (!this.direct) Arr.reverse();
    return Arr.join("");
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage == "" || key == "")
      throw new Error("lack of arguments");
    let message = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let array = [];
    for (let i = 0, j = 0; i < message.length; i++) {
      if (j == key.length) j = 0;
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        let ch2 =
          (message.charCodeAt(i) - 65 - (key.charCodeAt(j) - 65) + 26) % 26;
        array.push(String.fromCharCode(ch2 + 65));
        j++;
      } else {
        array.push(message[i]);
      }
    }
    if (!this.direct) array.reverse();
    return array.join("");
  }
}


module.exports = VigenereCipheringMachine;
