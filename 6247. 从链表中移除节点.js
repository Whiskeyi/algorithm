/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function (head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  let curMax = 0;
  let rzArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] >= curMax) {
      curMax = arr[i];
      rzArr.unshift(curMax)
    }
  }
  let lnRz = new ListNode();
  let rzHead = lnRz;
  for (let num of rzArr) {
    rzHead.next = new ListNode(num);
    rzHead = rzHead.next
  }
  return lnRz.next;
};