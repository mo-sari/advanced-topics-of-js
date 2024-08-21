class Triangle {
  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return this.a ** 2 + this.b ** 2;
  }
}
// this keyword points to the instance not the Triangle class

const triA = new Triangle();
const triB = new Triangle();

console.log(typeof triA);
triA.a = 2;
triA.b = 3;

console.log(triA.getArea());
// we used class format which still outputs an object, but we can share the functionaltites
// among as many objects as we want.

console.log(triA instanceof Triangle);
console.log(typeof triA);
