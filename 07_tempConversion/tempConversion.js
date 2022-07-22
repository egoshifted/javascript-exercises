const ftoc = function(tempF) {
let tempC = (tempF - 32) * 5/9;
if (tempC % 1 != 0) {
  return Number(tempC.toFixed(1));
} else return tempC;
};

const ctof = function(tempC) {
let tempF = (tempC * 9/5) + 32;
if (tempF % 1 != 0) {
  return Number(tempF.toFixed(1));
} else return tempF;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
