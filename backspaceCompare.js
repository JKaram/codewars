// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".
// Note:

// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.
// Follow up:

// Can you solve it in O(N) time and O(1) space?



// ------ WORST ANSWER EVER(RECURSIVE) ----- //
var backspaceCompare = function (S, T) {
    let newWord = S.split('')
    
    for (let letter in S) {
        if(S[0] === '#') {
            newWord.splice(0, 1)
            newWord = newWord.join('')
            return backspaceCompare(newWord , T)
        }
        
        if (S[letter] === '#') {
            newWord.splice(letter - 1, 2)
            newWord = newWord.join('')
            return backspaceCompare(newWord, T)
        }
        
    }

    let newWord2 = T.split('')
    for (let letter in T) {
        if(T[0] === '#') {
            newWord2.splice(0, 1)
            newWord2 = newWord2.join('')
            console.log('HERE')
            return backspaceCompare(newWord.join(''), newWord2)
        }
        
        if (T[letter] === '#') {
            newWord2.splice(letter - 1, 2)
            newWord2 = newWord2.join('')
            console.log('HERE2')
            return backspaceCompare(newWord.join(''), newWord2)
        }
        
    }
   
    return newWord.join('') === newWord2.join('')
};

//console.log(backspaceCompare("a##c","ad#c"));
