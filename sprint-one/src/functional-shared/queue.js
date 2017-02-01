var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstanceOf = {};
  someInstanceOf.length = 0;
  someInstanceOf.dequeueLower = 0;
  someInstanceOf.storage = {};

  extend(someInstanceOf, queueMethods);

  return someInstanceOf;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.size = function() {
  var result = this.length - this.dequeueLower;
  if (result < 0) {
    return 0;
  } else {
    return result;
  }
};

queueMethods.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

queueMethods.dequeue = function(value) {
  var answer = this.storage[this.dequeueLower];
  this.dequeueLower++;
  return answer;
};
