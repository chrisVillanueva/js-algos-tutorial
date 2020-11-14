
/**
 * Raise number to the power.
 * =========================
 * Example:
 * number = 3
 * power = 2
 * output = 3^2 = 9
 *
 * Big O
 * ========
 * time complexity   => 
 *    O(1) 
 *      for any input, the function does 
 *      exactly one operation
 * space complexity  =>
 *    O(1) 
 *      number of variables or stack layers 
 *      doesn't depend on input--it remains constant
 *
 *
 * @param {number} number
 * @param {number} power
 * @return {number}
 */

exports.fastPower = (number, power) => number ** power;

