var BinarySearchTree = function(value) {
  var searchTreeMethod = treeNode(value);
  
  searchTreeMethod.insert = function(value) {
    var searchInsert = function (nodeObj) {
      if (value < nodeObj.value) {
        if (nodeObj.left === null) {
          nodeObj.left = treeNode(value);
        } else {
          searchInsert(nodeObj.left);
        }
      } else if (value > nodeObj.value) {
        if (nodeObj.right === null) {
          nodeObj.right = treeNode(value);
        } else {
          searchInsert(nodeObj.right);
        }
      }
    };
    searchInsert(searchTreeMethod);
  };

  searchTreeMethod.contains = function(value) {
    
  };

  searchTreeMethod.depthFirstLog = function(callBack) {
  };

  return searchTreeMethod;
};

var treeNode = function(value) {
  var node = {};
  node.value = value;
  node.left = null;
  node.right = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */