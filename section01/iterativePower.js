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
 * time complexity: Linear  =>
 *    O(power) 
 *      for any value power, the number of
 *      operations depends on power--if power 
 *      increases, operations increase
 * 
 * space complexity: Constant  =>
 *    O(1) 
 *      number of variables or stack layers
 *      doesn't depend on input--it remains constant
 *
 * @param {number} number
 * @param {number} power
 * @return {number}
 */

module.exports = function iterativePower(q) {
    const { number, power } = q;
    let result = 1;
    
    if (!number || !power) return `iterativePower => invalid arguments`;

    console.log(`
        iterativePower::solve => number ${number} ^ power ${power}
    `);
    
    //processing depends on input O(n)
    for (let i = 0; i < power; i += 1) {
        result *= number;
    
        console.log(   `
            iterativePower:: iterate power => ${i+1}
            iterativePower:: result => ${result}
        `);
    }

    return result;
}