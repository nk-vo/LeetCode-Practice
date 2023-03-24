// Time complexity : O(m+n).
// Space complexity : O(1).

function mergeTwoLists(list1, list2) {
  const dummyNode = new ListNode();
  let currentNode = dummyNode;

  while (list1 !== null && list2 !== null) {
      if (list1.val < list2.val) {
          currentNode.next = list1;
          list1 = list1.next;
      } else {
          currentNode.next = list2;
          list2 = list2.next;
      }
      currentNode = currentNode.next;
  }

  if (list1 !== null) {
      currentNode.next = list1;
  } else {
      currentNode.next = list2;
  }

  return dummyNode.next;
}