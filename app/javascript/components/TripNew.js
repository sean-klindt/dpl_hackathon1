import React from 'react'

const TripNew = ({ user, trip }) => {
  const { name, duration } = trip
  const { id } = user
  const defaultName = name ? name : ''
  const defaultDuration = duration ? duration : ''
  return (
    <>
      <h1>New Trip Form</h1>
      <form action={`/users/${id}/trips`} method="post">
        <input 
          type="text" 
          defaultValue={defaultName}
          name="trip[name]"
          required
          placeholder="Trip Name"
        />
        <input
          type="text" 
          defaultValue={defaultDuration}
          name="trip[duration]"
          required
          placeholder="Duration"
        />
        
        <button type='submit'>Add Trip</button>
      </form>
    </>
  )
}

export default TripNew;