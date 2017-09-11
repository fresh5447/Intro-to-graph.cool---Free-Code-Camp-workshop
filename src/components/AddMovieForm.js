import React from 'react'

const AddMovieForm = (props) =>
  <div>
    <h1> Add New Movie </h1>
    <form onSubmit={props.handleSubmit}>
      <div>
        <label> Title: </label>
        <input
          value={props.title}
          type="text"
          placeholder='Title of the movie'
          onChange={(e) => props.handleUpdate('title', e.target.value)}
        />
      </div>
      <div>
        <label> Year: </label>
        <input
          value={props.year}
          type="number"
          placeholder='Year movie was created'
          onChange={(e) => props.handleUpdate('year', e.target.value)}
        />
      </div>
      <button type='submit'> Submit </button>
    </form>
  </div>

export default AddMovieForm
