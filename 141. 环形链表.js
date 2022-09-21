/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 1.map
  let map = new Map();
  while (head) {
    if (map.get(head)) return true
    map.set(head, 1)
    head = head.next;
  }
  return false
  // 2.判断环形链表报错
  // try {
  //     JSON.stringify(head)
  //     return false
  // } catch {
  //     return true
  // }
  // 3.快慢指针
};