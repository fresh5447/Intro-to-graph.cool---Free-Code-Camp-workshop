import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {compose} from 'recompose'

const Actors = (props) =>
  <div>
    {
      props.data.loading
      ? <h3> Loading Actors.. </h3>
      : (
        props.data.allActors.map(a => <h3> {a.name}</h3>)
      )
    }
  </div>

const fetchAllActors = gql`query allActors {
  allActors {
    name
  }
}`

const enhancer = compose(
  graphql(fetchAllActors)
)

export default enhancer(Actors)
