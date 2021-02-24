const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeat = 1;
  if (options.repeatTimes !== undefined)  repeat = options.repeatTimes;
  let string = "+"; 
  if (options.separator !== undefined) string = options.separator; 
  let stringStr = ""; 
  if (options.addition !== undefined) stringStr = options.addition; 
  let repeatStr = 1;
  if (options.additionRepeatTimes !== undefined)
  repeatStr = options.additionRepeatTimes; 
  let separatorStr = "|"; 
  if (options.additionSeparator !== undefined) separatorStr = options.additionSeparator; 
  let newStr = "";
  if ( repeat > 0) {
  for (let i = 0; i <  repeat; i++) {
  newStr += str;
  for (let j = 0; j < repeatStr; j++) {
  newStr += stringStr;
  if (j < repeatStr - 1) newStr += separatorStr;
  }
  if (i <  repeat - 1) newStr += string;
  }
  }
  return newStr;
  };
  
