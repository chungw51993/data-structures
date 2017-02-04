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
    var result = false;
    var searchValue = function (nodeObj) {
      if (nodeObj.value === value) {
        result = true;
      } else if (value < nodeObj.value && nodeObj.left !== null) {
        searchValue(nodeObj.left);
      } else if (value > nodeObj.value && nodeObj.right !== null) {
        searchValue(nodeObj.right);
      }
    };
    searchValue(searchTreeMethod);
    return result;
  };

  searchTreeMethod.depthFirstLog = function(callBack) {
    var applyToAll = function (nodeObj) {
      callBack(nodeObj.value);
      if (nodeObj.left !== null) {
        applyToAll(nodeObj.left);
      } else if (nodeObj.right !== null) {
        applyToAll(nodeObj.right);
      }
    };
    applyToAll(searchTreeMethod);
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
   insert: Logarithmic O(log(N))
   contains: Logarithmic O(log(N))
   depthFirstLog: Linear O(N)
 */