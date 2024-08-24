class Counter {
  constructor(startNum = 0, increment = 1) {
    this.count = startNum;
    this.increment = increment;
  }

  // start() {
  //   setInterval(function () {
  //     console.log(this);
  //     console.log(this.count);
  //     this.count += this.increment;
  //   }, 1000);
  // }
  // we're using setInterval function that is like we're saying window.setInterval
  // so this keyword's owner is window
  start() {
    setInterval(
      function () {
        console.log(this);
        console.log(this.count);
        this.count += this.increment;
      }.bind(this),
      1000
    );
  }
}

const counter = new Counter();
counter.start();
