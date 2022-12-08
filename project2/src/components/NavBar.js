import React from 'react'
import img from "../image/airbnb.png"

const NavBar = () => {
  return (
    
        <nav className='navBar'>
            <img src={img} alt="airbnb_logo" className='nav-logo'/>
        </nav>
    
  )
}

export default NavBar