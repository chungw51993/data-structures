

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucketList = [];

  if (this._storage.get(index) === undefined) {
    bucketList.push([k, v]);
    this._storage.set(index, bucketList);
  } else if (this._storage.get(index)[0][0] === k) {
    this._storage.get(index)[0][1] = v;
  } else {
    this._storage.get(index).push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var listToRetrieve = this._storage.get(index);
  for (var i = 0; i < listToRetrieve.length; i++) {
    if (listToRetrieve[i][0] === k) {
      return listToRetrieve[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var listToRetrieve = this._storage.get(index);
  for (var i = 0; i < listToRetrieve.length; i++) {
    if (listToRetrieve[i][0] === k) {
      listToRetrieve[i][1] = undefined;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


