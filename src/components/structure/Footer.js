import React from 'react'

const styles = {
  footer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: 25,
    backgroundColor: 'lightblue',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    boxShadow: '0px -5px 5px rgba(50%, 50%, 50%, .5)'
  }
}

const Footer = () =>
  <footer style={styles.footer}>
    <span>&copy; Worldwide Consumption, 2017</span>
  </footer>

export default Footer
