

// Instantiate a new graph
var Graph = function() {
  this.allNodes = [];
  this.edgeList = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var nodeObj = {};
  nodeObj.value = node;

  this.allNodes.push(nodeObj);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.allNodes.length; i++) {
    if (this.allNodes[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = -1;
  for (var i = 0; i < this.allNodes.length; i++) {
    if (this.allNodes[i].value === node) {
      index = i;
    }
  }
  this.allNodes.splice(index, 1);
  for (var j = 0; j < this.edgeList.length; j++) {
    if (this.edgeList[j][0] === node) {
      this.edgeList.splice(j, 2);
    }
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edgeList.length; i++) {
    if (this.edgeList[i][0] === fromNode && this.edgeList[i][1] === toNode 
      || this.edgeList[i][0] === toNode && this.edgeList[i][1] === fromNode ) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var fromIndex, toIndex;
  for (var i = 0; i < this.allNodes.length; i++) {
    if (this.allNodes[i].value === fromNode) {
      fromIndex = i;
    }
  }
  for (var j = 0; j < this.allNodes.length; j++) {
    if (this.allNodes[j].value === toNode) {
      toIndex = j;
    }
  }
  var edge = [];
  var flipEdge = [];
  edge[0] = this.allNodes[fromIndex].value;
  edge[1] = this.allNodes[toIndex].value;
  flipEdge[0] = this.allNodes[toIndex].value;
  flipEdge[1] = this.allNodes[fromIndex].value;
  this.edgeList.push(edge);
  this.edgeList.push(flipEdge);
  console.log(this.edgeList);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var edgeIndex, flipEdgeIndex;
  for (var i = 0; i < this.edgeList.length; i++) {
    if (this.edgeList[i][0] === fromNode && this.edgeList[i][1] === toNode) {
      edgeIndex = i;
    }
  }
  this.edgeList.splice(edgeIndex, 1);
  for (var j = 0; j < this.edgeList.length; j++) {
    if (this.edgeList[j][1] === fromNode && this.edgeList[j][0] === toNode) {
      flipEdgeIndex = j;
    }
  }
  this.edgeList.splice(flipEdgeIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.allNodes.length; i++) {
    cb(this.allNodes[i].value);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */


