// document.addEventListener('DOMContentLoaded', function () {
//   let navitems = document.querySelectorAll('nav div ul li a')
//   let sideBar = document.querySelectorAll('.sidebar ul li a')
//   let sidebarBtn = document.querySelector('.sideBtn')
//   let sidebar = document.querySelector('.sidebar')
//   let closeBtn = document.querySelector('.sidebar .sideBtn')

//   navitems.forEach((item) => {
//     item.addEventListener('click', () => {
//       navitems.forEach((item) => {
//         item.classList.remove('active')
//       })
//       item.classList.add('active')
//     })
//   })
// })

function calculate (a, b, c) {
  // return a + b ? c === '+' : a - b ? c === "-"
  if (c === '+') {
    return a + b
  } else if (c === '-') {
    return a - b
  }
}
console.log(calculate(8, 4, '+'))

function greet (name) {
  let greeting = 'Hello, ' + name
  return greeting
}
console.log(greet('Stessy'))

function numb (value) {
  return true ? value > 10 : false
}
console.log(numb(16))

function number (a, b, c) {
  function firstnumber (a, b, c) {
    if (b > a && b > c) {
      return 'The second value is greater than the 1st and 3rd values'
    }
  }
  // return firstnumber()

  function secondnumber (a, b, c) {
    if (b > a && b > c) {
      return 'This first value is greater than the second'
    }
  }
  // return secondnumber()
  function thirdnumber (a, b, c) {
    if (b > a && b > c) {
      return 'This Third value is greater than the second'
    }
  }
  console.log(number(firstnumber(2, 4, 6) && secondnumber() && thirdnumber()))
}
console.log(firstnumber(2, 4, 6))
console.log(secondnumber(2, 4, 6))
console.log(thirdnumber(2, 4, 6))
