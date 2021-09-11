import React from 'react'

const LocationEdit = ({ location }) => {
const { name, trip_id } = location
const defaultName = name ? name : ''
return (
  <>
    <h1>Edit Location</h1>
    <h3>{ name }</h3>

    <form action={`/trips/${trip_id}/trips/${id}`} method="post">
    <input type="hidden" name="_method" value="patch" />
      <input 
        placeholder="location name" 
        type="text"
        name="user[name]"
        defaultValue={defaultName}
        />
        <button type='submit'>Update Location</button>
    </form>
  </>
)
}

export default UserEdit;