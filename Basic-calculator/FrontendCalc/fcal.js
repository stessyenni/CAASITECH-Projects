document.addEventListener('DOMContentLoaded', function () {
  // Get the display
  let buttons = document.querySelectorAll('input[type=button]')
  let result = document.querySelector('#result')

  function display (value) {
    result.value += value
  }

  // function to calculate the values before displaying the result
  function operation () {
    if (result.value === 'value') {
      return result.value = 'None'
    } else {
      // result.value = Function('return' + result.value())
      result.value = eval(result.value)
    }
  }

  // Creating the del function
  function deleteval () {
    result.value = result.value.slice(0, -1)
  }

  // Function to reset the values
  function Reset () {
    result.value = ''
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let value = button.value

      if (value === '=') {
        return operation()
      } else if (value === 'DEL') {
        return deleteval()
      } else if (value === 'RESET') {
        return Reset()
      } else {
        display(value)
      }
    })
  })
})
