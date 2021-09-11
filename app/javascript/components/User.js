import React from 'react'

const User = ({ user }) => {
  const { id, name, email } = user
  return (
    <>
    <h1>{ name }</h1>
    <h3>{ email }</h3>
    <br/>
    <a href={`/users/${id}/trips`}>Trips</a>
    <br/>
    <hr/>
    <a href="/">Back</a>
    </>
  )
}

export default User;