import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../Home'
import Actors from '../Actors'
import Movies from '../Movies'

const styles = {
  main: {
    position: 'fixed',
    top: 50,
    left: 0,
    right: 0,
    bottom: 25,
    overflow: 'scroll'
  }
}

const Main = () =>
  <main style={styles.main}>
    <Route path='/' exact component={Home} />
    <Route path='/actors' component={Actors} />
    <Route path='/movies' component={Movies} />
  </main>

export default Main
