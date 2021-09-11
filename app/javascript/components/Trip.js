import React from 'react'

const Trip = ({ trip }) => {
  const { id, name, duration } = trip
  return (
    <>
    <h1>{ name }</h1>
    <h3>{ duration }days</h3>
    <br/>
    <a href={`/trips/${id}/locations`}>Locations</a>
    <br/>
    <hr/>
    <a href="/">Back</a>
    </>
  )
}

export default Trip;