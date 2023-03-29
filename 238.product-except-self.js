// Time complexity : O(n).
// Space complexity : O(1).

var productExceptSelf = function(nums) {
  const n = nums.length;
  const answer = new Array(n).fill(1);
  let leftProduct = 1, rightProduct = 1;

  for (let i = 0; i < n; i++) {
      answer[i] *= leftProduct;
      leftProduct *= nums[i];

      answer[n - 1 - i] *= rightProduct;
      rightProduct *= nums[n - 1 - i];
  }

  return answer;
};