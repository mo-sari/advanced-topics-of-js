class Triangle {
  constructor(a, b) {
    this._a = a;
    this._b = b;
    // _, indicating that do not mess with this directly
    // can define a function for validation and use it in
    // both constructor and setter function
  }
  //   getter syntax in js
  get area() {
    return (this._a * this._b) / 2;
  }
  get a() {
    return this._a;
  }
  set a(value) {
    // check for value to validate
    this._a = a;
  }
}

const tri = new Triangle(3, 4);
console.log(tri.area);
