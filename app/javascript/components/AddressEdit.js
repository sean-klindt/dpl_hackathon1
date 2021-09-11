import React from 'react'

const AddressEdit = ({ address }) => {
const { id, street_address, user_id } = address
const defaultAddress = street_address ? street_address : ''

return (
  <>
    <h1>Edit address</h1>
    <h3>{ street_address }</h3>


    <form action={`/locations/${user_id}/addresses/${id}`} method="post">
    <input type="hidden" name="_method" value="patch" />
      <input 
        placeholder="address name" 
        type="text"
        name="address[street_addresses]"
        defaultValue={defaultAddress}
        />
       
        <button type='submit'>Update Address</button>
    </form>
  </>
)
}

export default AddressEdit;