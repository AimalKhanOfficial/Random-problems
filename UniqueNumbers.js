//Definition - No two values have the same number of occurrences

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let uniqueArrayCount = {};
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArrayCount[arr[i]]) uniqueArrayCount[arr[i]] = 1;
        else uniqueArrayCount[arr[i]] = uniqueArrayCount[arr[i]] + 1;
    }
    let counterChecker = [];
    for (let counterValue in uniqueArrayCount) {
        if (counterChecker.includes(uniqueArrayCount[counterValue])) return false;
        else counterChecker.push(uniqueArrayCount[counterValue]);
    }
    return true;
};

let arr1 = [1,2,2,1,1,3];
let arr2 = [1,2];
let arr3 = [-3,0,1,-3,1,1,1,-3,10,0];

console.log('Arr:', arr1, ', Result:', uniqueOccurrences(arr1));
console.log('arr2:', arr2, ', Result:', uniqueOccurrences(arr2));
console.log('arr3:', arr3, ', Result:', uniqueOccurrences(arr3));


//RESULTS: 
//Runtime: 109 ms, faster than 22.55% of JavaScript online submissions for Unique Number of Occurrences.
//Memory Usage: 42.4 MB, less than 69.07% of JavaScript online submissions for Unique Number of Occurrences.
//https://leetcode.com/submissions/detail/852116331/