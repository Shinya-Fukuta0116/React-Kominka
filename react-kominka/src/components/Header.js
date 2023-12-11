import React from 'react'

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <h3>Kominka</h3>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header