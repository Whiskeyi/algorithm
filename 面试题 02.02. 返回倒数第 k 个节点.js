/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
 var kthToLast = function(head, k) {
    let arr = [];
    while(head) {
        arr.push(head.val);
        head = head.next;
    }
    let len = arr.length;
    return arr[ len - k ]
};

// 方法二 快慢指针
const kthToLast = (head, k) => {
    let [fast, slow] = [head, head];
    while (k--) {
        // 快指针先走k步
        fast = fast.next;
    }
    while (fast) {
        // 再一起走，直到快指针走到头
        fast = fast.next;
        slow = slow.next;
    }
    // 此时的慢指针指的就是倒数第k个
    return slow.val;
};