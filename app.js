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

const triA = new Triangle(3, 4);
console.log(triA.hello());
