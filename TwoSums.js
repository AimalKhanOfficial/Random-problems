//Question: https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let firstIndex, secondIndex = 0;
    let indicesFound = false;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i === j) continue;
            if (nums[i] + nums[j] === target) {
                indicesFound = true;
                firstIndex = i;
                secondIndex = j;
            }
        }
    }
    return indicesFound ? [firstIndex, secondIndex] : [];
};

console.log('>> twoSum(2,7,11,15)', twoSum([2,7,11,15], 9));
console.log('>> twoSum(3,2,4)', twoSum([3,2,4], 6));
console.log('>> twoSum(3,3)', twoSum([3,3], 6));

/*
RESULTS:
Runtime: 318 ms, faster than 7.36% of JavaScript online submissions for Two Sum.
Memory Usage: 42.2 MB, less than 77.79% of JavaScript online submissions for Two Sum.
*/