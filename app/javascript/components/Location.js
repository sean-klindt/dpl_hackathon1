import React from 'react'

const Location = ({ location }) => {
  const { name, id } = location
  return (
    <>
    <h1>{ name }</h1>
    <br />
    <a href="/">Back</a>
    <br />
    <a href={`/locations/${id}/addresses`}>Addresses</a>
    </>
  )
}

export default Sub;