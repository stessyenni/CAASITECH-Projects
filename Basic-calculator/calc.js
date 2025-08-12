document.addEventListener('DOMContentLoaded', function () {
  let a = document.querySelector('#increment')
  let b = document.querySelector('#decrement')
  let c = document.querySelector('#input')

  a.addEventListener('click', function (a) {
    a.value = parseInt(a.value) + 1
    c.value = a.value
  })

  b.addEventListener('click', function () {
    b.value = parseInt(b.value) - 1
    c.value = b.value
  })

  c.addEventListener('input', function () {
    a.value = parseInt(c.value)
    b.value = parseInt(c.value)
  })
})
