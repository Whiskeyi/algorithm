/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    // 根据head，计算总长度
    let listLength = getLengthByHead(head);
   // 索引为 length-N 的节点即为所要删除的节点，所以找到前一个节点和后一个节点
    let count = 0; // 计数器
    let resultIndex = listLength-n; // 目标索引
    let prev = null; // 前一个节点
    let resultNode = null; // 目标节点
    let nextNode = null; // 后一个节点
    let current = head; // 当前节点
  // 边界判断，如果要删除第一个节点
  if( resultIndex === 0) {
        head = head.next;
  }else {
    while(current) {
        if(count === resultIndex -1) {
            prev = current
        }
        if(count === resultIndex) {
            resultNode = current
        }
        if(count === resultIndex + 1) {
            nextNode = current
        }
        current = current.next
        count++;
    }
        prev.next = nextNode;
        resultNode.next = null;
    }
  return head;
};

function getLengthByHead(head){
    let length = 0;
    while(head){
        head = head.next;
        length++;
    }
    return length;
}

// 快慢指针
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode();
        dummy.next = head;
    let quickp = dummy,
        slowp = dummy;
    for (let i = 0; i <= n; i++) {
      quickp = quickp.next;
    }
    while (quickp !== null) {
      slowp = slowp.next;
      quickp = quickp.next;
    }
    slowp.next = slowp.next.next;
    return dummy.next;
  };

  // 存数组处理
  var removeNthFromEnd = function(head, n) {
    const arr = [];
    let cur = head;
    while(cur) {
        arr.push(cur.val);
        cur = cur.next;
    }
    arr.splice(arr.length - n, 1);
    let dummyHead = new ListNode(0), t = dummyHead;
    for(let v of arr){
        t.next = new ListNode(v);
        t = t.next;
    }
    return dummyHead.next;
};