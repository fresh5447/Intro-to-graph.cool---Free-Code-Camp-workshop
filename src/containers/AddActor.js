import React, {Component} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {compose} from 'recompose'
import AddActorForm from '../components/AddActorForm'

class AddActor extends Component {
  state = {
    name: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const variables = {
      name: this.state.name
    }
    this.props.addActor({ variables })
      .then(response => console.log('Success Creating Actor',response))
      .catch(e => console.error('Error Creating Actor', e))
  }

  handleUpdate = (field, value) => {
    const tempState = {}
    tempState[field] = value
    this.setState(tempState)
  }

  render () {
    return <AddActorForm
      handleSubmit={this.handleSubmit}
      name={this.state.name}
      handleUpdate={this.handleUpdate}
    />
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
const enhancer = compose(
  graphql(addActor, {name: 'addActor'}),

)

export default enhancer(AddActor)
