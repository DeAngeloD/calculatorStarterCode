// All the code you will need to create for this project will be completed below
// Your functions must be called the following:
    // multiply, divide, subtract, add, power, square_root, logBase10, generateRandomNumber


function divide(x,y) {
	//Write your code below this line	
	return x/y;
}
console.log(divide(10,2));

function multiply(x,y) {

return x*y;
}
console.log(multiply(10,2));

function subtract(x,y) {
return x-y;
}
console.log(subtract(10,2));

function add(x,y) {
return x+y;
}
console.log(add(10,2));

function power(x,y) {
return Math.pow(x,y);
}
console.log(power(9,2));

function square_root(x) {
return Math.sqrt(x);
}
console.log(square_root(36));

function logBase10(x) {
return Math.log10(x);
}
console.log(logBase10(100));

function generateRandomNumber() {
return Math.random();
}
console.log(generateRandomNumber());

// BONUS: write assertions to test whether your functions work!
// Here are some examples for divide(x,y), can you write more for the other functions?
//
// console.assert(divide(1,1) === 1, "1/1 should equal 1");
function divided(x,y) {
return x/y;
}
console.assert(divided(1,1) === 1, "1/2 should equal 1");
// console.assert(divide(1,2) === 0.5, "1/2 should equal 0.5");
function divided(x,y) {
return x/y;
}
console.assert(divided(1,2) === 0.5, "1/2 should equal 0.5");
