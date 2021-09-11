import React from 'react'

const UserEdit = ({ user }) => {
const { id, name, email } = user
const defaultName = name ? name : ''
const defaultEmail = email ? email : ''
return (
  <>
    <h1>Edit User</h1>
    <h3>{ name }</h3>
    <h3>{ email }</h3>

    <form action={`/users/${id}`} method="post">
    <input type="hidden" name="_method" value="patch" />
      <input 
        placeholder="user name" 
        type="text"
        name="user[name]"
        defaultValue={defaultName}
        />
        <input 
          placeholder="email"
          type="text"
          name="user[email]"
          defaultValue={defaultEmail}
        />
        <button type='submit'>Update User</button>
    </form>
  </>
)
}

export default UserEdit;