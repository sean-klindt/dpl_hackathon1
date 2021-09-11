import React from 'react'

const AddressNew = ({ location, address }) => {
  const { street_address } = address
  const { id } = location
  const defaultAddress = street_address ? street_address : ''
 
  return (
    <>
      <h1>New Address Form</h1>
      <form action="/loaction/${id}/address" method="post">
        <input 
          type="text" 
          defaultValue={defaultAddress}
          name="address[streetaddress]"
          required
          placeholder="Address Street Address"
        />
       

        <button type='submit'>Add Address</button>
      </form>
    </>
  )
}

export default AddressNew;