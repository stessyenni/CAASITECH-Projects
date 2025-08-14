document.addEventListener('DOMContentLoaded', function () {
  let num1 = document.querySelector('.input1')
  let num2 = document.querySelector('.input2')
  let result = document.querySelector('.result')

  const btnAdd = document.querySelector('.add')
  const btnSubtract = document.querySelector('.subtract')
  const btnMultiply = document.querySelector('.multiply')
  const btnDivide = document.querySelector('.divide')

  // Creating functions for each button
  function add () {
    result.value = Number(num1.value) + Number(num2.value)
  }

  function subtract () {
    result.value = Number(num1.value) - Number(num2.value)
  }

  function multiply () {
    result.value = Number(num1.value) * Number(num2.value)
  }

  function divide () {
    return result.value = 'Error' ? Number(num2.value) === 0 :
      result.value = Number(num1.value) / Number(num2.value)
  }

  btnAdd.addEventListener('click', add)
  btnSubtract.addEventListener('click', subtract)
  btnMultiply.addEventListener('click', multiply)
  btnDivide.addEventListener('click', divide)
})

// Basic Calculator with if else
// function calculator (a, b, operator) {
//   if (operator === 'add') {
//     return a + b
//   } else if (operator === 'subtract') {
//     return a - b
//   } else if (operator === 'divide') {
//     return a / b
//   } else {
//     return 'Invalid operation'
//   }
// }

// console.log(calculator(456, 77, 'divide'))

// // Basic Calculator with summarised if else using ? & :
// function calculator (a, b, operator) {
//   return operator === 'add' ? a + b :
//     operator === 'subtract' ? a - b :
//       operator === 'divide' ? a / b : 'Invalid operation: Please Input the available valid operators'
// }

// console.log(calculator(88, 17, 'multiply'))

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
