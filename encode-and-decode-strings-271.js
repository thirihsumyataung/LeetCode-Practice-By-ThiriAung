/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */

//const Omega = '\u03A9' 

var encode = function(strs) {
    return strs.join('hooba')
    //    return strs.join('hooba')


    /*
        const result = s.split(Omega);
    result.pop(); // pop empty segment
    return result;

    */
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    return s.split('hooba')

    /*
    const result = s.split(Omega);
    result.pop(); // pop empty segment
    return result;

    */
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

const arr1 = ["Hello","World"]
const arr2 = [""]

console.log(decode(encode(arr1)));
console.log(decode(encode(arr2)));


