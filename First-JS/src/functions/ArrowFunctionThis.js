function Counter() {
    this.count = 0;
  
    // Traditional function with a workaround for maintaining 'this'
    setInterval(function() {
      this.count++;
      console.log("Traditional:", this.count); // 'this' is not the Counter instance
    }.bind(this), 1000);
  
    // Arrow function with lexical 'this'
    setInterval(() => {
      this.count++;
      console.log("Arrow:", this.count); // 'this' is the Counter instance
    }, 1000);
  }
  
  const counter = new Counter();

