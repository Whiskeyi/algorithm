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
 var middleNode = function(head) {
    let saveHead = head;
    let n = 0;
    while(head) {
        n++;
        head = head.next;
    }
    n = Math.floor(n / 2) + 1;
    while(saveHead) {
        n--;
        if(n === 0) return saveHead;
        saveHead = saveHead.next;
    }
};

// 快慢指针
var middleNode = function(head) {
    slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};