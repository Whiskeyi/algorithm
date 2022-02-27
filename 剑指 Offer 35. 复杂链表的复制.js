/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function (head) {
    // 非空判定
    if (!head) return head;
    let node = head;
    // 把所有节点都存到map中
    let map = new Map();
    // 复制节点，将新节点放入map中
    while (node) {
      map.set(node, new Node(node.val));
      node = node.next;
    }
    // 再将当前指针指向头节点
    node = head;
    // 从头节点再开始遍历，更改map中对应节点的next指针和random指针
    while (node) {
      map.get(node).next = map.get(node.next) || null;
      map.get(node).random = map.get(node.random);
      node = node.next;
    }
    // 返回map中的头节点，也就是复制后的头节点
    return map.get(head);
  };