document.addEventListener('DOMContentLoaded', function () {
  // let inputfields = document.querySelectorAll('input')
  let FirstName = document.querySelector('#firstName')
  let LastName = document.querySelector('#lastName')
  let Email = document.querySelector('#email')
  let GeneralQuery = document.querySelector('#general')
  let SupportQuery = document.querySelector('#support')
  let SubmitBtn = document.querySelector('#submitBtn')

  // Adding eventlistener to the button
  // SubmitBtn.addEventListener('submit', function () {})

  // Adding eventlistener to the input fields
  FirstName.addEventListener('input', function () {
    console.log('First Name changed:', firstName.value)
  })

  LastName.addEventListener('input', function () {
    console.log('Last Name changed:', lastName.value)
  })

  Email.addEventListener('input', function () {
    console.log('Email changed:', email.value)
  })

  Email.addEventListener('input', function () {
    console.log('Email changed:', email.value)
  })

  GeneralQuery.addEventListener('input', function () {
    console.log('General Query changed:', general.value)
  })

  SupportQuery.addEventListener('input', function () {
    console.log('Support Query changed:', support.value)
  })
})
