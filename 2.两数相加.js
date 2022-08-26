/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let L1 = [];
    let L2 = [];
    let rz = new ListNode(), t = rz;
    while (l1) {
        L1.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        L2.push(l2.val);
        l2 = l2.next;
    }
    let total = (BigInt(L1.reverse().join("")) + BigInt(L2.reverse().join(""))).toString();
    for (let i = total.length - 1; i >= 0; i--) {
        t.next = new ListNode(total[i]);
        t = t.next;
    }
    return rz.next;
};