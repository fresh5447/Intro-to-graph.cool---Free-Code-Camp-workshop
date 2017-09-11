import PropTypes from 'prop-types'
import React from 'react'
import {NavLink} from 'react-router-dom'

const propTypes = {
  children: PropTypes.node.isRequired,
  exact: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired
}

const defaultProps = {
  exact: false
}

const styles = {
  link: {
    backgroundColor: 'white',
    border: '1px solid orange',
    color: 'orange',
    fontSize: 20,
    textDecoration: 'none',
    padding: 5,
    margin: 5,
    borderRadius: 5
  },
  activeLink: {
    backgroundColor: 'orange',
    color: 'white'
  }
}

const NavbarLink = (props) =>
  <NavLink
    to={props.to}
    exact={props.exact}
    style={styles.link}
    activeStyle={styles.activeLink}
  >
    {props.children}
  </NavLink>

NavbarLink.propTypes = propTypes
NavbarLink.defaultProps = defaultProps

export default NavbarLink
