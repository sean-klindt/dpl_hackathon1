import React from 'react'

const TripEdit = ({ trip }) => {
const { id, name, duration, user_id } = trip
const defaultName = name ? name : ''
const defaultDuration = duration ? duration : ''
return (
  <>
    <h1>Edit Trip</h1>
    <h3>{ name }</h3>
    <h3>{ duration } days</h3>

    <form action={`/users/${user_id}/trips/${id}`} method="post">
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