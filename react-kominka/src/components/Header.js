import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <h3>Kominka</h3>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link >
          </li>
          <li>
            <Link to="About">About</Link >
          </li>
          <li>
            <Link to="Menu">Menu</Link >
          </li>
          <li>
            <Link to="Contact">Contact</Link >
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
