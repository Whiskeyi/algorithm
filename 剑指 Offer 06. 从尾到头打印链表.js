// 使用unshift从前往后添加
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    var s = [];
    while (head) {
        s.unshift(head.val);
        head = head.next;
    }
    return s;
};

// 正常获取数组，最后结果去反
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    let arr = [];
    while (head) {
        arr.push(head.val)
        head = head.next;
    }
    return arr.reverse();
};