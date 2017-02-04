

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucketList = [];

  if (this._storage.get(index) === undefined) {
    bucketList.push([k, v]);
    this._storage.set(index, bucketList);
    this._count++; 
  } else if (this._storage.get(index)[0][0] === k) {
    this._storage.get(index)[0][1] = v;
  } else {
    this._storage.get(index).push([k, v]);
    this._count++;
  }

  //resizing attempt
  if (this._count > (this._limit * 0.75)) {
    this._resize(this._limit * 2);
    //rehash old vals from old hash into new table
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var listToRetrieve = this._storage.get(index);
  if (listToRetrieve === undefined) {
    return undefined;
  }
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
      listToRetrieve.splice(i, 1);
      //resizing attempt
      this._count--;
      if (this._count < (this._limit * 0.25)) {
        this._resize(this._limit / 2);
          //rehash old vals from old hash into new table
      }
    }
  }
};

HashTable.prototype._resize = function(newLimit) {
  var oldStorage = this._storage;
  this._limit = newLimit;
  this._storage = LimitedArray(newLimit);
  this._count = 0;

  oldStorage.each(function(bucket) {
    if (!bucket) {
      return;
    }
    for (var i = 0; i < bucket.length; i++) {

      if (bucket[i][1] !== undefined) {
        var tuple = bucket[i];
        this.insert(tuple[0], tuple[1]);
      }
    }

  }.bind(this));

};




/*
 * Complexity: What is the time complexity of the above functions?
   insert: Constant O(1)
   retrieve: Linear O(n)
   remove: Linear O(n)
 */


