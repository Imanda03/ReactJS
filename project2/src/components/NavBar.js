import React from 'react'
import img from "../image/airbnb.png"

const NavBar = () => {
  return (
    
        <nav>
            <img src={img} alt="airbnb_logo" className='nav-logo'/>
        </nav>
    
  )
}

export default NavBar