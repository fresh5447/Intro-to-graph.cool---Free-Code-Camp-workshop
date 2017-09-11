import React, {Component} from 'react'
import AddMovieForm from '../components/AddMovieForm'

class AddMovie extends Component {
  state = {
    title: '',
    year: ''
  }

  handleSubmit = () => {
    alert('submit triggered, view console for data values')
    console.log(this.state)
  }

  handleUpdate = (field, value) => {
    const tempState = {}
    tempState[field] = value
    this.setState(tempState)
  }

  render () {
    return <AddMovieForm
      handleSubmit={this.handleSubmit}
      title={this.state.title}
      year={this.state.year}
      handleUpdate={this.handleUpdate}
    />
  }
}

export default AddMovie
