document.addEventListener('DOMContentLoaded', function () {
  let navlinks = document.querySelectorAll('nav li a')
  const cartadd = document.querySelector('.btn1')
  const cartminus = document.querySelector('.btn2')
  let numInput = document.querySelector('#input')

  let currentPath = window.location.pathname.replace()

  // Making the menu indicate Active on the current page
  navlinks.forEach(menu => {
    let menus = new URL(menu.href).pathname
    if (menus === currentPath) {
      menu.classList.add('active')
    }
  })

  // Function for adding the cart item number
  function inputNumber (number) {
    let a = parseInt(numInput.value) || 0
    let b = a + number
    numInput.value = b
  }

  cartadd.addEventListener('click', function () {
    inputNumber(-1)
  })

  cartminus.addEventListener('click', function () {
    inputNumber(+1)
  })
})
