import React from 'react'
import { NavLink } from 'react-router-dom'

const Navyu = () => {
  return (
    <nav>
        <div className='menuIcon'></div>
        <ul className='navbar-list'>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
                <NavLink to="/service">Service</NavLink>
            </li>
            <li>
                <NavLink to="/career">Career</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact Us</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navyu