class Triangle {
  edgeNum = 3;
  //   different than static properties like those are tied to class,
  // but these are public properties which are tied to instances
  //   can access to it with this on instance
  //   can just set a property in constructor like this.edgeNum = 3
  // but this avoides repetition( clean up our constructor)

  constructor(a, b) {
    this._a = a;
    this._b = b;
  }
}

const tri = new Triangle(3, 4);
console.log(tri.edgeNum);
