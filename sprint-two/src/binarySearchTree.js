var BinarySearchTree = function(value) {
  var searchTreeMethod = {};
  var headNode = null;

  searchTreeMethod.insert = function(value) {
    var node = {};
    node.value = value;
    node.left = null;
    node.right = null;
   
    if (headNode === null) {
      headNode = node;
    } else {
      var searchInsert = function (nodeObj) {
        if (node.value < nodeObj.value) {
          if (nodeObj.left === null) {
            nodeObj.left = node;
          } else {
            searchInsert(nodeObj.left);
          }
        } else if (node.value > nodeObj.value) {
          if (nodeObj.right === null) {
            nodeObj.right = node;
          } else {
            searchInsert(nodeObj.right);
          }
        }
      };
      searchInsert(headNode);
    }
    console.log(headNode);
  };

  searchTreeMethod.contains = function(value) {

  };

  searchTreeMethod.depthFirstLog = function(callBack) {

  };

  return searchTreeMethod;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
