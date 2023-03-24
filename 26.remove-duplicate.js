// Time complexity : O(n).
// Space complexity : O(1).

var removeDuplicates = function (nums) {
  let last;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== last) {
      nums[count] = nums[i];
      last = nums[i];
      count++;
    }
  }
  return count;
};

let nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));