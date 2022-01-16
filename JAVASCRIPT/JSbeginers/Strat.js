// In JS this syntax is valid
// console.log("Hello World!");

// This syntax is also valid
// console.log('Without Semicolon')

// Variables "meaningfull entity to identify things."
var name = 'brad'
let name1 = 'greyat'
const name2 = 'mujin'
// Uniquely identifies each entity

// console.log(name,name1,name2);

// Variables can be changebale except
/*
	name2 = 'park'
*/
// assignment to constant variable cannot be done


// Execution is line by line, code will not execute
name1 = 'richard'
// console.log(name1);


// Types of value in variable, primary data types, value
let firstname = 'string' // String literal
let num = 20		     // Number literal
let flag = true		     // Boolean literal
let lastname = undefined // Undefined literal
let race = null		     // Null literal

// To check the type
/*
console.log(
	typeof firstname,
	typeof num,
	typeof flag,
	typeof lastname,
	typeof race
	);
*/

//array in javascript
let selectedColor = ['red','green','blue'];
console.log(selectedColor[1]);
console.log(selectedColor.length); // property is inherited
console.log(selectedColor);

//functions in javascript
function callstack() {
	return "hello";
	// throw new Error('stack');
}
function greet(){
	callstack();
}
console.log(callstack());
console.log(greet.toString());
console.log(greet);

//due to working of js compiler
function greets(param1, param2){
	console.log('hello ' + param1 + ' there ' + param2);
}
greets('john', 'smith');
greets('brad'); // made param2 to undefined

console.log();
alert(console.log());
