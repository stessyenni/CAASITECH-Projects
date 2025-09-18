import React from 'react'


const usersPage = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users');
  const users = await res.json()
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default usersPage
