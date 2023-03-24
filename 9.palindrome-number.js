// Time complexity : O(log(n)).
// Space complexity : O(1).

var isPalindrome = function(x) {
  if (x < 0) return false
  var num = x;
  var res = 0;
  while (num !== 0) {
      res = (res * 10) + (num % 10);
      num = Math.floor(num/10)
  }

  return x === res;

};
