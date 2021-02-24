const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let mumber = +sampleActivity;
  if (!isNaN(sampleActivity)) {
    let year = Math.ceil(
      Math.log(MODERN_ACTIVITY) / mumber / (0.693 / HALF_LIFE_PERIOD)
    );
    if (!isNaN(year)) {
      return false;
    }
  } else return false;
};
