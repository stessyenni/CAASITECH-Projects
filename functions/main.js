// function value () {
// return value()
// }
function whatType (value) {
  if (value % 2 === 0) {
    console.log(`${value} is an Even Number`)
  } else {
    console.log(`${value} is an Odd Number`)
  }
}
console.log(whatType(545))
