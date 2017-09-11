import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Layout from './components/Layout'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: process.env.REACT_APP_GRAPH_COOL_URL
})


const client = new ApolloClient({
  networkInterface
})


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </ApolloProvider>
    )
  }
}

export default App
