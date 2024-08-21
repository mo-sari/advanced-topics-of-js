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

// why would we use static function's ? :
//  we can combine related functionalities like
// what we had in react-django project's for
// login, logout and ... something like:
// API.login, API.logout ==> API in this case is the class
// that has login, logout and some other static method's.
