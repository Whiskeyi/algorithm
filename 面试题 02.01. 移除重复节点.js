/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var removeDuplicateNodes = function(head) {
    if (head == null) {
      return head;
    }
    const set = new Set();
    set.add(head.val);
    let prev = head;     // head是存在的，赋给prev
    let cur = head.next; // head是存在的，它的next赋给cur
    while (cur) {
      if (set.has(cur.val)) { // 如果当前节点是重复的
        prev.next = cur.next; // 让prev的next直接指向cur的next，完成删除
        cur = cur.next;       // 更新一下cur
      } else {
        set.add(cur.val);     // 当前节点是第一次出现，存储一下
        prev = prev.next;     // prev和cur都更新一下，跳到下一个
        cur = cur.next;
      }
    }
    return head; // 返回删除重复节点后的链表
  };

// // head 链表
// var head = [1, 2, 3, 3, 2, 1];
// const map = new Map();
// let rz = new Array;
// for(node of head) {
//     map.set(node ,(map.get(node) || 0) + 1);
// }
// let len = [...map].length;
// for(i = 0; i < len; i++) {
//     rz.push([...map][i][0])
// }
// console.log(rz)