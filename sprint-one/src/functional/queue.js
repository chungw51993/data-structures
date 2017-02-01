var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var dequeueLower = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    var answer = storage[dequeueLower];
    dequeueLower++;
   
    return answer;
  };

  someInstance.size = function() {
    var result = size - dequeueLower;
    if (result < 0) {
      return 0;
    } else {
      return result;
    }
  };

  return someInstance;
};
