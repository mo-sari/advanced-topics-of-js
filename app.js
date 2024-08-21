class Triangle {
  constructor(a, b) {
    if (a <= 0 || b <= 0) {
      throw new Error("you canttt");
    }
    this.a = a;
    this.b = b;
  }
  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return this.a ** 2 + this.b ** 2;
  }
  static sideNumber = 3;
}

const tri = new Triangle(2, 4);
console.log(tri.sideNumber);
console.log(Triangle.sideNumber);
