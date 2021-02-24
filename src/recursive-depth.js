const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let position = 1; //начальная глубина массива
    if (Array.isArray(arr)) {
      //проверка есть ли массив
      for (let item of arr) {
        // перебор массива
        if (Array.isArray(item)) {
          let newPosition = this.calculateDepth(item); //рекурсия
          if (newPosition >= position) {
            // проверка на позици
            position = newPosition + 1;
          }
        }
      }
      return position;
    } else return 0;
  }
};
