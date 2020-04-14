class BinaryNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  class BST {
    constructor() {
      this.root = null;
    }
  }
  
  function getSmallest(current) {
    if (current.left === null) {
      return current;
    }
    else {
      return this.getSmallest(current.left);
    }
  }
  
  function getLargest(current) {
    if (current.right === null) {
      return current;
    }
    else {
      return this.getLargest(current.right);
    }
  }
  
  function findValue(value, current) {
    if (value === current) {
      return true;
    }
    else if (value < current) {
      return this.findValue(value, current.left);
    }
    else if (value > current) {
      return this.findValue(value, current.right);
    }
    else {
      return false;
    }
  }
  