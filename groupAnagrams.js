// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.


var groupAnagrams = function(strs) {
    let hash = {};

    strs.forEach(word => {
        let letters = word.split('').sort();
        

        hash[letters] ? hash[letters].push(word) : hash[letters] = [word]
    });
    const keys = Object.keys(hash);

    return keys.map(ana => hash[ana])
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
