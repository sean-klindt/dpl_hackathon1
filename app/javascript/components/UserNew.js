import React from 'react'

const UserNew = ({ user }) => {
  const { name, email, password } = user
  const defaultName = name ? name : ''
  const defaultEmail = email ? email : ''
  const defaultPassword = password ? password : ''
  return (
    <>
      <h1>New User Form</h1>
      <form action="/users" method="post">
        <input 
          type="text" 
          defaultValue={defaultName}
          name="user[name]"
          required
          placeholder="Full Name"
        />
        <input
          type="text" 
          defaultValue={defaultEmail}
          name="user[email]"
          required
          placeholder="Email"
        />
        <input
          type="password" 
          defaultValue={defaultPassword}
          name="user[password]"
          required
          placeholder="Password"
        />
        
        <button type='submit'>Add User</button>
      </form>
    </>
  )
}

export default UserNew;