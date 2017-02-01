var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.length = 0;
  someInstance.dequeueLower = 0;

  return someInstance;

};

var queueMethods = {};

queueMethods.size = function() {
  
  var result = this.length - this.dequeueLower;
  if (result < 0) {
    return 0;
  }
  return this.length - this.dequeueLower;
};

queueMethods.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

queueMethods.dequeue = function() {
  var answer = this.storage[this.dequeueLower];
  this.dequeueLower++;
  return answer;
};
