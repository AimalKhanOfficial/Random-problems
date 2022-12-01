//Question - https://leetcode.com/problems/determine-if-string-halves-are-alike/

let countVowelsAndReturnCount = function(sampleString) {
    let counter = 0;
    for (let i = 0; i < sampleString.length; i++) {
        if (['a', 'e', 'i', 'o', 'u'].includes(sampleString[i])) counter++;
    }
    return counter;
}

/**
 * @param {string} s
 * @return {boolean}
 */
 var halvesAreAlike = function(s) {
    return countVowelsAndReturnCount(s.toLowerCase().slice(0, s.length/2)) === countVowelsAndReturnCount(s.toLowerCase().slice(s.length/2));
};

console.log('>> book', halvesAreAlike("book"));
console.log('>> textbook', halvesAreAlike("textbooK"));

//RESULTS:
//Runtime: 78 ms, faster than 85.55% of JavaScript online submissions for Determine if String Halves Are Alike.
//Memory Usage: 43.9 MB, less than 34.77% of JavaScript online submissions for Determine if String Halves Are Alike.
//https://leetcode.com/submissions/detail/852609851/