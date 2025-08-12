document.addEventListener('DOMContentLoaded', function () {
  let button1 = document.querySelector('.increment')
  let button2 = document.querySelector('.decrement')
  let numInput = document.querySelector('#input')

  button1.addEventListener('increment', 'click', function () {
    alert('Increment Button Clicked')
  })

  button2.addEventListener('decrement', 'click', function () {
    for (let i = 0; i > b.value; i--) {
      b.value = parseInt(b.value) - 1
      c.value = b.value
    }
  })

  c.addEventListener('input', function () {
    if (c.value > 0) {
      a.value = parseInt(c.value)
      b.value = parseInt(c.value)
    } else {
      a.value = 0
      b.value = 0
    }
  })
})
