import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {compose} from 'recompose'
import AddMovie from '../containers/AddMovie'

const Movies = (props) =>
  <div>
  {
    props.data.loading
    ? <h3> Loading Movies.. </h3>
    : (
      props.data.allMovies.map(m => <h3> {m.title}</h3>)
    )
  }
  <div>
    <AddMovie />
  </div>
  </div>

const fetchAllMovies = gql`query allMovies {
  allMovies {
    id
    title
  }
}`
const enhancer = compose(
  graphql(fetchAllMovies)
)

export default enhancer(Movies)
