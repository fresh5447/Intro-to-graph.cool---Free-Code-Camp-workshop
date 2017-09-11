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
      <div>
        <label> Movie: </label>
        <select onChange={(e) => props.handleUpdate('movie', e.target.value)}>
        {
          props.movies.map(movie =>
            <option value={movie.id}> {movie.title} </option>
          )
        }
        </select>
      </div>
      <button type='submit'> Submit </button>
    </form>
  </div>

export default AddActorForm
