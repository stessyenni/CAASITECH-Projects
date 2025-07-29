// Basic Calculator with if else
function calculator (a, b, operator) {
  if (operator === 'add') {
    return a + b
  } else if (operator === 'subtract') {
    return a - b
  } else if (operator === 'divide') {
    return a / b
  } else {
    return 'Invalid operation'
  }
}

console.log(calculator(4, 7, 'multiply'))

// Basic Calculator with summarised if else using ? & :
function calculator (a, b, operator) {
  return operator === 'add' ? a + b :
    operator === 'subtract' ? a - b :
      operator === 'divide' ? a / b : 'Invalid operation'
}

console.log(calculator(8, 7, 'add'))

// method 2 - Basic Calculator with objects
// function calculator (a, b, operator) {
// let calculator = {
// add: (a, b) => a + b,
// subtract: (a, b) => a - b,
// multiply: (a, b) => a * b,
// divide: (a, b) => a / b
// }

// // console.log(calculator['add'](19, 23))
// return calculator[operator](a, b)
// }
// console.log(calculator(34, 86, 'multiply'))

// function calculator (a, b, operator = '') {
// let calculator = {add, subtract, multiply, divide}

// console.log(calculator)
// return calculator[operator](a, b)
// }

// function add (a, b) {
// return a + b
// }

// function subtract (a, b) {
// return a - b
// }

// function multiply (a, b) {
// return a * b
// }

// function divide (a, b) {
// return a / b
// }

// console.log(calculator(34, 86, 'subtract'))
