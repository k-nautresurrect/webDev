console.log(this);
console.log(typeof window);

var a = 10; // function scope
{
  let a1 = 1; // block scope
}
const a2 = 4;

// console.log(a1);

ab = 9; // global variable
console.log(typeof ab);

function fun() {
  // these types of function will get to the top of module
  let a = 8;
  if (a === 8) {
    b = 9; //acting as an global scope variable
    // var b = 9; // acting as an function block scope
    // let b = 9; // acting as an if block scope
    console.log(`inside if : ${b}`);
  }
  console.log(`outside if : ${b}`);
}

fun();
// funv();
console.log(`in the global ${b}`);

// function hoisting
let funv = function () {
  // this declaration will not get on the top
  console.log("hello");
};

/*
 * function() { ..args return something;} // function expression
 */

funv();

// js allows us to create an object without class
let bird = {
  x: 30,
  y: 40,
  color: "red",
  eggs: ["one", "two", "three"],

  fly: function () {
    console.log(`the bird is flying ${this.x} ${this.y}`);
    return;
  },
};

class birds {
  //introduced in es5
  constructor(x, y, color, eggs) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.eggs = eggs;
  }
}

let sudo = new birds(20, 30, "green", 0);

// es6
let sym = Symbol("sym");
let sym2 = Symbol("sym");

console.log(sym === sym2);
console.log(sym2.description);

// traversing an array in the object

for (let i = 0; i < bird.eggs.length; i++) {
  console.log(bird.eggs[i]);
}

bird.eggs.forEach(function (value, index) {
  console.log(index, value);
});

bird.eggs.map(function (value, index) {
  console.log(index, value);
});
