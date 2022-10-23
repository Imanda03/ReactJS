import React from 'react'
import logo from "./image/download.png"
import "../App.css"

const Header = () => {
  return (
    <div id='header'>
        <nav id='nav'>

            <img src={logo} alt="logo" id="logo"  className='nav-logo' />
            <h2 className='nav-h2'>React Facts</h2>
            <h3  className='nav-h3'>React Course-Project1</h3>
        </nav>
    </div>
  )
}

export default Header