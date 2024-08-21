class Circle {
  #radius;
  #privateMethod() {
    console.log("this is private");
  }
  constructor(r) {
    this.#radius = r;
  }
  get radius() {
    this.#privateMethod();
    return this.#radius;
  }
}

const c = new Circle(10);
// c.#privateMethod();
c.radius;
