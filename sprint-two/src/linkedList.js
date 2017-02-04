var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    var answer = list.head;
    list.head = list.head.next;
    return answer.value;    
  };

  list.contains = function(target) {
    var item = list.head;

    while (item !== null) {
      if (item.value === target) {
        return true;
      }
      item = item.next;
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
   addToTail: Constant O(1);
   removeHead: Constant O(1);
   contains: Linear O(n);

 */
  