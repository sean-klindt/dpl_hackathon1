import React from 'react'

const Address = ({ address }) => {
  const { street_address } = address
  return (
    <>
    <h1>{ street_address}</h1>
    
    <br/>
    <a href={`/locations/${id}/addresses`}>Addresses</a>
    <br/>
    <hr/>
    <a href="/">Back</a>
    </>
  )
}

export default Address;