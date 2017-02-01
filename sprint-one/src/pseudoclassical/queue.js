var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.storage = {};
  this.dequeueLower = 0;
};

Queue.prototype.size = function() {
  var result = this.length - this.dequeueLower;
  if (result < 0) {
    return 0;
  }
  return result;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

Queue.prototype.dequeue = function() {
  var answer = this.storage[this.dequeueLower];
  this.dequeueLower++;
  return answer;
};