// creating a global variable with 2 arrays within an arraytype variable
const arraytype = [[10, 23, 44], ['Apple', 'Orange', 'Banana']]
let number = arraytype[0]
let fruits = arraytype[1]

// creating a function numstrings with the global variable as the function parameter
function numstrings (arraytype) {
  for (let i = 0; i < arraytype.length; i++) {
    const array = arraytype[i]
    // console.log(`Type: ${typeof array}`)

    // // Determine the number and string with if/else displaying in an array form
    if (array === arraytype[0]) {
      console.log(number)
    } else if (array === arraytype[1]) {
      console.log(fruits)
    }
  }
}
numstrings(arraytype)
// console.log(number)
// console.log(fruits)
