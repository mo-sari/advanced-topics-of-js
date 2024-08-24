const conan = {
  name: "conan",
  sing: function () {
    console.log(this);
  },
};

const btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   console.log("clicked here");
// });
// btn.addEventListener("click", conan.sing);
btn.addEventListener("click", conan.sing.bind(conan));

// when mostly this bind keyword comes up ?
// when you do not directly call functions and instead JavaScript calls them,
// a keyword this is created for you.
