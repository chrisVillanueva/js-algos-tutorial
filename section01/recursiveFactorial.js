/**
 * Calculate factorial (n!).
 * =========================
 * Example:
 * number = 5
 * output = 120
 *
 * Big O
 * ========
 * time complexity: Linear  =>
 *    O(number)
 *      for any value number,the total
 *      operations depends on number--if number
 *      increases, operations increase since recursion
 *      is like a for loop
 * 
 * space complexity: Linear  =>
 *    O(number)
 *      for any value number, the amount of 
 *      stack layers depends on number--the larger
 *      the number, the more function calls added
 *      to the stack--linear proportion growth
 *
 * @param {number} number
 * @return {number}
 */

// processing:
// ====================
//  recursiveFactorialHelper(5) =>
//  5 * recursiveFactorialHelper(4) =>
//  5 * 4 * recursiveFactorialHelper(3) =>
//  5 * 4 * 3 * recursiveFactorialHelper(2) =>
//  5 * 4 * 3 * 2 * recursiveFactorialHelper(1) =>
//  5 * 4 * 3 * (2 * 1)
//  5 * 4 * (3 * 2)
//  5 * (4 * 6)
//  (5 * 24)
//  120

function recursiveFactorialHelper(number){
    
    //base case
    if (number === 0) {
        console.log('reached base case: 0, return 1');
        
        return 1;
    } 

    console.log(
        `recursiveFactorialHelper stack number => ${number}
         recursiveFactorialHelper next number => ${(number -1)}
        `
    ); 

    return number * recursiveFactorialHelper(number - 1);
};

module.exports = function recursiveFactorial(q) {
    const { number } = q;

    if (!number || number < 0) return `recursiveFactorial => invalid arguments`;
    
    return recursiveFactorialHelper(parseInt(number, 10));
};


