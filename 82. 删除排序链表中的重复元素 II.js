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
var deleteDuplicates = function (head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  let rzNode = new ListNode();
  let currRz = rzNode;
  let map = new Map();
  for (let k of arr) {
    map.set(k, map.get(k) + 1 || 1)
  }
  let rzIndex = [];
  [...map.values()].forEach((item, index) => {
    if (item === 1) rzIndex.push(index)
  })

  let rzArr = [];
  rzIndex.forEach(item => {
    rzArr.push([...map.keys()][item])
  })
  rzArr.forEach(item => {
    currRz.next = new ListNode(item);
    currRz = currRz.next;
  })
  return rzNode.next;
};