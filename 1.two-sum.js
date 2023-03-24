// Time Complexity: O(n)
// Space Complexity: O(n)


// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
function twoSum(nums, target) {
    const numDict = {};

    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        const complement = target - num;

        if (complement in numDict) {
            return [numDict[complement], index];
        }

        numDict[num] = index;
    }
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));  // Output: [0, 1]