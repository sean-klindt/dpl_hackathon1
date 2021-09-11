import React from 'react'

const TripEdit = ({ trip }) => {
const { id, name, duration } = trip
const defaultName = name ? name : ''
const defaultDuration = duration ? duration : ''
return (
  <>
    <h1>Edit User</h1>
    <h3>{ name }</h3>
    <h3>{ duration }</h3>

    <form action={`/trips/${id}`} method="post">
    <input type="hidden" name="_method" value="patch" />
      <input 
        placeholder="trip name" 
        type="text"
        name="trip [name]"
        defaultValue={defaultName}
        />
        <input 
          placeholder="duration"
          type="text"
          name="trip[duration]"
          defaultValue={defaultDuration}
        />
        <button type='submit'>Update Trip</button>
    </form>
  </>
)
}

export default TripEdit;