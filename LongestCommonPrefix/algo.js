// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let str = ''
    let j = 0
    let min = strs[0].length
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < min) {
            min = strs[i].length
        }
    }
    for (let k = 0; k < min; k++) {
        let test = strs[0][k]
        while (j < strs.length - 1) {
            j++
            if (test != strs[j][k]) {
                return str
            }
        }
        j = 0
        str += test
    }
    return str
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))