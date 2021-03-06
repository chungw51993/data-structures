var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var index = this._storage.indexOf(item);
  if (index === -1) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  var index = this._storage.indexOf(item);
  if (index !== -1) {
    this._storage.splice(index, 1);
  }
};

setPrototype.length = function() {
  return this._storage.length;
};

/*
 * Complexity: What is the time complexity of the above functions?
   add: Constant O(1)
   contains: Linear O(n)
   remove: Linear O(n)
   length: Constant O(1)
 */
