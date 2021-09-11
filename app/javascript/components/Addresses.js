import React from 'react';

const Addresses = ({ location, addresses }) => {
  const { id } = location
  return (
    <>
      <h1>Ruby Off the Rails Trip Tracker</h1>
      <a href={`/locations/${id}/addresses/new`}>New Address</a>
      {
          addresses.map( (address) => (
            <div>
              <h5>{address.name}</h5>
              <a href={`locations/${id}/addresses/${address.id}`}>Show</a>
              {' '}
              <a href={`locations/${id}}/addresses/${address.id}/edit`}>Edit</a>
              {' '}
              <a href={`locations/${id}/addresses/${address.id}`}data-method="delete">Delete</a>
            </div>
          ))
      }
      
    </>
  )
}

export default Addresses;