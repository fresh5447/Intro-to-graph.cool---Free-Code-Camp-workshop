import React, {Component} from 'react'
import AddActorForm from '../components/AddActorForm'

class AddActor extends Component {
  state = {
    name: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    alert('submit triggered, view console for data values')
    console.log(this.state)
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

export default AddActor
