// Time complexity : O(max(m,n)).
// Space complexity : O(max(m,n)).

var addTwoNumbers = function(l1, l2) {
  const dummyNode = new ListNode();
  let currentNode = dummyNode;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
      const val1 = l1 !== null ? l1.val : 0;
      const val2 = l2 !== null ? l2.val : 0;

      let sum = val1 + val2 + carry;
      carry = Math.floor(sum / 10);
      sum = sum % 10;

      currentNode.next = new ListNode(sum);
      currentNode = currentNode.next;

      if (l1 !== null) l1 = l1.next;
      if (l2 !== null) l2 = l2.next;
  }

  if (carry > 0) {
      currentNode.next = new ListNode(carry);
  }

  return dummyNode.next;
};