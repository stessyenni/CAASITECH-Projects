document.addEventListener('DOMContentLoaded', function () {
  let navitems = document.querySelectorAll('nav div ul li a')

  navitems.forEach((item) => {
    item.addEventListener('click', () => {
      navitems.forEach((item) => {
        item.classList.remove('active')
      })
      item.classList.add('active')
    })
  })
})
