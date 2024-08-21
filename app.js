class Triangle {
  constructor(a, b) {
    if (a <= 0 || b <= 0) {
      throw new Error("you canttt");
    }
    this.a = a;
    this.b = b;
  }
  //   constructor method's are called upon instance creation.
  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return this.a ** 2 + this.b ** 2;
  }
}

const triA = new Triangle(3, 4);
console.log(triA);
console.log(triA.getArea());

// usual usecases of constructors:
// 1- assign properties
// 2- validation

console.log(new Triangle(0, 1));
