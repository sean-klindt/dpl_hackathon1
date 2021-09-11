import React from 'react'

const LocationNew = ({ trip, location }) => {
  const { id } = trip
  const { name } = location
  const defaultName = name ? name : "";
  return (
    <>
      <h1>New Location</h1>
      <form action={`/trips/${id}/locations`} method="post">
        <input 
          type="text" 
          defaultValue={defaultName}
          name="location[Name]"  
          required
          placeholder="Name"
        />
        <button type="submit">Add Location</button>
      </form>
    </>
  )
}

export default LocationNew;