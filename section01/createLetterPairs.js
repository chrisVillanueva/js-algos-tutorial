/**
 * Create pairs of letters.
 * =========================
 *
 * Example:
 * letter = ['a', 'b']
 * output = ['aa', 'ab', 'ba', 'bb']
 *
 * Big O
 * ========
 * time complexity: Quadratic  =>
 *    O(letters.length^2) 
 *      outer/inner for loops used to match
 *      letter pairs.  processing time depends
 *      on letters array length.
 * 
 * space complexity: Quadratic =>
 *    O(letters.lenght^2) 
 *      space for paired array will increase 
 *      depending on letters input
 *
 * @param {string[]} letters
 * @return {string[]}
 */

module.exports = function createLetterPairs(q) {
    const { letters } = q;   
    let paired = [];
    
    if (!letters) return `createLetterPairs => invalid arguments`;

    const lettersArray = letters.split(',');

    console.log(`createLetterPairs::solve => letters ${lettersArray}`);
    
    //outer loop processing depends on input O(letters.length)
    for (let i = 0; i < lettersArray.length; i += 1) {
        console.log(`letter pointer => ${lettersArray[i]}`);

        //inner loop processing depends on input O(letters.length)
        for (let j = 0; j < lettersArray.length; j += 1) {
            paired.push(` ${lettersArray[i]}${lettersArray[j]} `);

            console.log(`paired => ${lettersArray[i]}${lettersArray[j]} `);
        }
    }

    return paired;
};
