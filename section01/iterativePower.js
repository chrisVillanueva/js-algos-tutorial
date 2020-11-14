/**
 * Raise number to the power.
 * =========================
 *
 * Example:
 * number = 3
 * power = 2
 * output = 3^2 = 9
 *
 * Big O
 * ========
 * time complexity   =>
 *    O(power) 
 *      for any value power, the number of
 *      operations depends on power--if power 
 *      increases, operations increase
 * space complexity  =>
 *    O(1) 
 *      number of variables or stack layers
 *      doesn't depend on input--it remains constant
 *
 * @param {number} number
 * @param {number} power
 * @return {number}
 */

module.exports = function iterativePower(number, power) {
    let result = 1;

    for (let i = 0; i < power; i += 1) {
        result *= number;
    }

    return result;
}