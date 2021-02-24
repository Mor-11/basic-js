const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  let newArra = [...arr];
  let position = 0;

  for (let index = 0; index < newArra.length; index++) {
    if (arr[index] === "--double-next") {
      position = index;
      newArra.splice(position, 1, arr[position + 1]);
    }
    if (arr[index] === "--double-prev") {
      position = index;
      newArra.splice(position, 1, newArra[position - 1]);
    }
    if (arr[index] === "--discard-prev") {
      if (index > 0) {
        position = index - 1;
        newArra.splice(position, 1, undefined);
      }
    }
    if (arr[index] === "--discard-next") {
      if (index < arr.length) {
        position = index + 1;
        newArra.splice(position, 1, undefined);
      }
    }
  }
  let Transform_array = newArra.filter(
    (item) =>
      item !== undefined &&
      item !== "--discard-next" &&
      item !== "--discard-prev" &&
      item !== "--double-prev" &&
      item !== "--double-next"
  );
  return Transform_array;
};
