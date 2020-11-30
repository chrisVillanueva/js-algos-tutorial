
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
 * time complexity: Constant => 
 *    O(1) 
 *      for any input, the function does 
 *      exactly one operation, so it's 
 *      constant time
 * 
 * space complexity: Constant =>
 *    O(1) 
 *      number of variables or stack layers 
 *      doesn't depend on input--it remains constant
 *
 *
 * @param {number} number
 * @param {number} power
 * @return {number}
 */

module.exports = function constantPower(q) {
    const {number , power} = q;
    
    if (!number || !power) return `constantPower => invalid arguments`;

    console.log(`
        constantPower::solve => number ${number} ^ power ${power}
    `);

    return number ** power 
};

