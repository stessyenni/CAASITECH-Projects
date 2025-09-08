document.addEventListener('DOMContentLoaded', function () {
  let navitems = document.querySelectorAll('nav div ul li a')
  let sidebarBtn = document.querySelector('.sideBtn')
  let sidebar = document.querySelector('.sidebar')
  let closeBtn =document.querySelector('.sidebar .sideBtn')

  navitems.forEach((item) => {
    item.addEventListener('click', () => {
      navitems.forEach((item) => {
        item.classList.remove('active')
      })
      item.classList.add('active')
    })
  })

  sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show')
  })
})
