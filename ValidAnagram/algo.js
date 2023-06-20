// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let map = {}
    for (let i = 0; i < s.length; i++) {
        if (!map.hasOwnProperty(s[i])) {
            map[s[i]] = 1
        }
        else {
            map[s[i]]++
        }
    }
    for (let j = 0; j < t.length; j++) {
        if (!map.hasOwnProperty(t[j])) {
            return false
        }
        else {
            map[t[j]]--
        }
    }
    let check = Object.values(map)
    for (let k = 0; k < check.length; k++) {
        if (check[k] != 0) {
            return false
        }
    }
    return true
};

console.log(isAnagram("anagram", "nagaram"))