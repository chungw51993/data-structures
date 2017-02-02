

// Instantiate a new graph
var Graph = function() {
  this.storage = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(nodeObj) {
  var node = {};

  node.value = nodeObj;
  node.connected = [];
 

  this.storage.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === node) {
      return true;
    } 
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === node) {
      this.storage.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  var contain = function(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].value === value) {
        return true;
      } 
    }
    return false;
  };

  var startNode = this.indexOf(fromNode);
  var lastNode = this.indexOf(toNode);

  var mainArray = this.storage;
  var firstArr = mainArray[startNode].connected;
  var secondArr = mainArray[lastNode].connected;

  if (contain(firstArr, toNode) && contain(secondArr, fromNode)) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var start = this.indexOf(fromNode);
  var last = this.indexOf(toNode);

  this.storage[start].connected.push(this.storage[last]);
  this.storage[last].connected.push(this.storage[start]);

  //console.log(this.storage[start].connected);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var mainArray = this.storage;
  var indexFrom = mainArray.indexOf(fromNode);
  var indexTo = mainArray.indexOf(toNode);
  var fromChildrenArr = mainArray[indexFrom].connected;
  var toChildrenArr = mainArray[indexTo].connected;
  var indexToInFromArr = fromChildrenArr.indexOf(toNode);
  var indexFromInToArr = toChildrenArr.indexOf(fromNode);

  fromChildrenArr = fromChildrenArr.slice(indexToInFromArr, 1);
  toChildrenArr = toChildrenArr.slice(indexFromInToArr, 1);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

Graph.prototype.indexOf = function(value) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === value) {
      return i;
    }
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */


