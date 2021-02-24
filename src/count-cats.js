const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
        let cat = 0;
        for (let i = 0; i < matrix.length; i++) {
          matrix[i].map((item) => {
            if (item === "^^") cat++;
          });
        }
        return cat++;
      }
