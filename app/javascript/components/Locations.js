import React from 'react';

const Locations = ({ trip, locations }) => {
  const { id } = trip
  return (
    <>
      <h1>Ruby Off the Rails Trip Tracker</h1>
      <a href={`/trips/${id}/locations/new`}>New Trip</a>
      {
          locations.map( (location) => (
            <div>
              <h5>{location.name}</h5>
              <a href={`/trips/${id}/locations/${location.id}`}>Show</a>
              {' '}
              <a href={`/trips/${id}}/locations/${location.id}/edit`}>Edit</a>
              {' '}
              <a href={`/trips/${id}/locations/${location.id}`}data-method="delete">Delete</a>
            </div>
          ))
      }
      
    </>
  )
}

export default Locations;