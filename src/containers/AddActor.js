import React, {Component} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {compose} from 'recompose'
import AddActorForm from '../components/AddActorForm'

class AddActor extends Component {
  state = {
    name: '',
    movie: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const variables = {
      name: this.state.name
    }
    this.props.addActor({ variables })
      .then(response => {
        const newVars = { actorsActorId: response.data.createActor.id, moviesMovieId: this.state.movie }
        console.log(newVars)
        return newVars
      })
      .then((vars) => this.props.addActorToMovie(vars))
      .then(result => console.log('RESULT FROM ADDING ACTOR TO MOVIE', result))
      .catch(e => console.error('Error Creating Actor', e))
  }

  handleUpdate = (field, value) => {
    const tempState = {}
    tempState[field] = value
    this.setState(tempState)
  }

  render () {
    return this.props.data.allMovies
    ? <AddActorForm
      handleSubmit={this.handleSubmit}
      name={this.state.name}
      handleUpdate={this.handleUpdate}
      movies={this.props.data.allMovies}
    /> : (
      <h1> Error must have movies </h1>
    )
  }
}

const addActor = gql`
  mutation addActor($name: String!) {
    createActor(name: $name) {
      id
      name
    }
  }
`
const addActorToMovie = gql`
  mutation ($actorsActorId: ID!, $moviesMovieId: ID!){
      addToActorOnMovie(actorsActorId: $actorsActorId, moviesMovieId: $moviesMovieId) {
        actorsActor {
          id
        }
    }
  }
  `

const fetchAllMovies = gql`query allMovies {
  allMovies {
    id
    title
  }
}`

const enhancer = compose(
  graphql(addActor, {name: 'addActor'}),
  graphql(fetchAllMovies),
  graphql(addActorToMovie, {name: 'addActorToMovie'})
)

export default enhancer(AddActor)
