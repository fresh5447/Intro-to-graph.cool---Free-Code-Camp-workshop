import React, {Component} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {compose} from 'recompose'
import AddMovieForm from '../components/AddMovieForm'


class AddMovie extends Component {
  state = {
    title: '',
    year: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const variables = {
      title: this.state.title,
      year: Number(this.state.year)
    }
    this.props.addMovie({ variables })
      .then(response => console.log('Success Creating Movie',response))
      .catch(e => console.error('Error Creating Movie', e))
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



const addMovie = gql`
  mutation addMovie($title: String!, $year: Float!) {
    createMovie(title: $title, year: $year) {
      id
      title
      year
    }
  }
`
const enhancer = compose(
  graphql(addMovie, {name: 'addMovie'}),

)

export default enhancer(AddMovie)
