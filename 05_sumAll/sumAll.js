const sumAll = function(a, b) {
    // Check if inputs are less than 0
    if(a < 0 || b < 0) return 'ERROR'

    // Check if inputs are integers
    if(!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR'

    //Define min & max integers - this helps if large number is first
    let min = Math.min(a, b)
    let max = Math.max(a, b)

    // Using array to store all numbers
    let sumArr = [];
    
    // Pushes each number into the array
    for(i = min; i < max +1; i++) {
        sumArr.push(i);
    }

    // Sum of all numbers in the array
    let sum = 0;
    for (let i = 0; i < sumArr.length; i++) {
        sum += sumArr[i];
    }
  
return sum;

};

// Do not edit below this line
module.exports = sumAll;
