import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {compose} from 'recompose'
import AddActor from '../containers/AddActor'

const Actors = (props) =>
  <div>
    {
      props.data.loading
      ? <h3> Loading Actors.. </h3>
      : (
        props.data.allActors.map(a => (
          <div>
            <h3> {a.name}</h3>
            {a.movies && a.movies.length > 0
              ? a.movies.map(m => <p> {m.title} </p>)
              : <p> Actor has no movies </p>
            }
          </div>
        ))
      )
    }
    <div>
      <AddActor />
    </div>
  </div>

const fetchAllActors = gql`query allActors {
  allActors {
    name,
    movies {
      title
    }
  }
}`

const enhancer = compose(
  graphql(fetchAllActors)
)

export default enhancer(Actors)
