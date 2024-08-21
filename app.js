class Triangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  static sideNumber = 3;
  static func() {
    console.log(this);
  }
  newFunc() {
    console.log(this);
  }
}

const tri = new Triangle(2, 4);
console.log(tri.sideNumber);
console.log(Triangle.sideNumber);
console.log(Triangle.func());
// this in a static method refers to the class itself
// but in a regular method refers to the instance.
