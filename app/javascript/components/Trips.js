import React from 'react';

const Trips = ({ user, trips }) => {
  const { id } = user
  return (
    <>
      <h1>Ruby Off the Rails Trip Tracker</h1>
      <a href={`/users/${id}/trips/new`}>New Trip</a>
      {
          trips.map( (trip) => (
            <div>
              <h5>{trip.name}</h5>
              <a href={`users/${id}/trips/${trip.id}`}>Show</a>
              {' '}
              <a href={`users/${id}}/trips/${trip.id}/edit`}>Edit</a>
              {' '}
              <a href={`users/${id}/trips/${trip.id}`}data-method="delete">Delete</a>
            </div>
          ))
      }
      
    </>
  )
}

export default Trips;