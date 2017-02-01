var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstanceOf = {};
  someInstanceOf.length = 0;
  someInstanceOf.storage = {};
  extend(someInstanceOf, stackMethods);

  
  return someInstanceOf;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.size = function() {
  return this.length;
};

stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

stackMethods.pop = function(value) {
  var answer = this.storage[this.length - 1];
  if (this.length !== 0) {
    this.length--;
  }
  return answer;
};
