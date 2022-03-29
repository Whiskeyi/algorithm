/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let arr = [];
    while(head) {
        arr.push(head.val);
        head = head.next;
    }
    if(arr.length === 1) return true;
    // 双指针
    for(let i = 0, j = arr.length - 1; i <= j; i++, j--) {
        if(arr[i] === arr[j]) continue;
        else return false;
    }
    return true;
};