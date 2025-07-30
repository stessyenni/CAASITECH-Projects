function value () {
  return 27
}
function whatType (value) {
  if (value % 2 === 0) {
    console.log(`${value} This is an Even Number`)
  } else {
    console.log(`${value} This is an Odd Number`)
  }
}
console.log(whatType(27))
