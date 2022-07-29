import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar' role='navigation'>
      <div className='navbar-items'>
    <NavLink
      to="/"
      className='navbar-item'
      >
        Home
    </NavLink>

      <NavLink
      to="/places"
      className='navbar-item'
      >
      Places
      </NavLink>
      </div>
    </nav>
  )
}

export default NavBar