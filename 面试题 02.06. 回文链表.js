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
 var isPalindrome = function(head) {
     // 将链表存数组
    let arr = []
    while(head){
      arr.push(head.val)
      head = head.next
    }
    return arr.toString() === (arr.reverse()).toString() // 翻转数组判断
 };

 // 方法二 递归调用

 let frontPointer;

 const recursivelyCheck = (currentNode) => {
     if (currentNode !== null) {
         if (!recursivelyCheck(currentNode.next)) {
             return false;
         }
         if (currentNode.val !== frontPointer.val) {
             return false;
         }
         frontPointer = frontPointer.next;
     }
     return true;
 }

 var isPalindrome = function(head) {
     frontPointer = head;
     return recursivelyCheck(head);
 };

 // 方法三 快慢指针
    // 找到前半部分链表的尾节点。
    // 反转后半部分链表。
    // 判断是否回文。
    // 恢复链表。
    // 返回结果。
 const reverseList = (head) => {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}

const endOfFirstHalf = (head) => {
    let fast = head;
    let slow = head;
    while (fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}

var isPalindrome = function(head) {
    if (head == null) return true;

    // 找到前半部分链表的尾节点并反转后半部分链表
    const firstHalfEnd = endOfFirstHalf(head);
    const secondHalfStart = reverseList(firstHalfEnd.next);

    // 判断是否回文
    let p1 = head;
    let p2 = secondHalfStart;
    let result = true;
    while (result && p2 != null) {
        if (p1.val != p2.val) result = false;
        p1 = p1.next;
        p2 = p2.next;
    }

    // 还原链表并返回结果
    firstHalfEnd.next = reverseList(secondHalfStart);
    return result;
};