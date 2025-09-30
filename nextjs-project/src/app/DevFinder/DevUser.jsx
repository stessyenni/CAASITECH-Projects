import React from 'react'

const DevUser = () => {
  const res = await fetch('https://api.github.com/users/a-che613');
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

export default DevUser
