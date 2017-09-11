import React from 'react'

const AddActorForm = (props) =>
  <div>
    <h1> Add New Actor </h1>
    <form onSubmit={props.handleSubmit}>
      <div>
        <label> Title: </label>
        <input
          value={props.name}
          type="text"
          placeholder='Name of the actor'
          onChange={(e) => props.handleUpdate('name', e.target.value)}
        />
      </div>
      <button type='submit'> Submit </button>
    </form>
  </div>

export default AddActorForm
