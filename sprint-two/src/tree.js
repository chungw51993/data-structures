var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  extend(newTree, treeMethods);

  return newTree;
};

var extend = function(to, from) {
  for (var keys in from) {
    to[keys] = from[keys];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      return true;
    } else if (this.children[i].children.length !== 0) {
      for (var j = 0; j < this.children[i].children.length; j++) {
        if (this.children[i].contains(target)) {
          return true;
        }
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
   addChild: Constant O(1)
   contains: Linear O(n)
 */
