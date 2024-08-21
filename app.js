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

  hello() {
    return `a triangle with ${this.getArea()} area size says hello`;
  }
}

class RightTriangle extends Triangle {
  constructor(a, b, color) {
    super(a, b);
    this.color = color;
  }
  describe() {
    return "this is not available in Triangle only in this class";
  }
  hello() {
    return super.hello() + ` from the child(RightTriangle class)`;
  }
}

const newTri = new RightTriangle(3, 2, "blue");
console.log(newTri.hello());
