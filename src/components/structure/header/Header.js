import React from 'react'
import NavbarLink from './NavbarLink'

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    boxShadow: '0px 5px 5px rgba(50%, 50%, 50%, .5)'
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50
  }
}

const Header = () =>
  <header style={styles.header}>
    <nav style={styles.nav}>
      <NavbarLink to='/' exact>Home</NavbarLink>
      <NavbarLink to='/movies'>Movies</NavbarLink>
      <NavbarLink to='/actors'>Actors</NavbarLink>
    </nav>
  </header>

export default Header
