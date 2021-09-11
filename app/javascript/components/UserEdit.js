import React from 'react'

const UserEdit = ({ user }) => {
const { name, email, password } = user
const defaultName = name ? name : ''
const defaultEmail = email ? email : ''
const defaultPassword = password ? password : ''
return (
  <>
    <h1>Edit User</h1>
  </>
)
}

export default UserEdit;