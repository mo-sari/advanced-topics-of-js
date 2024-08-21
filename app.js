class Circle {
  #radius;
  constructor(r) {
    this.#radius = r;
  }
  get radius() {
    return this.#radius;
  }
}

const c = new Circle(10);
console.log(c.radius);
// console.lsog(c.#radius);
