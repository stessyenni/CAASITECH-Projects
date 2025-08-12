document.addEventListener('DOMContentLoaded', function () {
  const Increment = document.querySelector('.btn1')
  const Decrement = document.querySelector('.btn2')
  let numInput = document.querySelector('#input')

  function inputNumber (number) {
    let a = parseInt(numInput.value) || 0
    let b = a + number
    numInput.value = b
  }

  Increment.addEventListener('click', function () {
    inputNumber(+1)
  })

  Decrement.addEventListener('click', function () {
    inputNumber(-1)
  })
})
