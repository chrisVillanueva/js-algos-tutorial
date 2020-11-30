/**
 * Multiply array values with a multiplier -- 
 * Immutable result.
 *
 * Example:
 * array = [1, 2, 3]
 * multiplier = 2
 * output = [2, 4, 6]
 *
 * Big O
 * ========
 * time complexity: Linear  =>
 *    O(numbers.length) 
 *      numbers length determines processing time.
 * 
 * auxillary space complexity: Linear =>
 *    O(numbers.length) 
 *      create localized array to update values.
 *      amount of space determined ny numbers length. 
 *
 * @param {number[]} numbers
 * @param {number} multiplier
 * @return {number[]}
 */

module.exports = function multiplyArrayImmutable(q) {
    const { numbers, multiplier } = q;   

    if (!numbers || ! multiplier) return `multipleArrayImmutable => invalid arguments`;

    const auxillaryArray = numbers.split(',');

    console.log(`
        multiplyArrayImmutable::solve => 
        numbers ${auxillaryArray} * multiplier ${multiplier}
    `);
    
    //processing depends on O(numbers.length)
    for (let i = 0; i < auxillaryArray.length; i += 1) {
        auxillaryArray[i] *= multiplier;
    }

    console.log(`multiplyArrayInPlace::result => ${auxillaryArray} `);
    
    return auxillaryArray;
};




