document.addEventListener('DOMContentLoaded', function () {
  let navitems = document.querySelectorAll('nav div ul li a')
  let sidebar = document.querySelector('.sidebar')

  navitems.forEach((item) => {
    item.addEventListener('click', () => {
      navitems.forEach((item) => {
        item.classList.remove('active')
      })
      item.classList.add('active')
    })
  })
  sidebar.addEventListener('click', () => {
    sidebar.style.display = 'flex'
  })
})
