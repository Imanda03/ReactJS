import React from 'react'
import Photo from "./image/mine.jpg"
import {MdEmail} from "react-icons/md"

const Header = () => {
  return (
    <nav>
        <img src={Photo} alt='My Photo' id='nav-photo' />
        <h2>Anish Sharma</h2>
        <h5>Frontend Developer</h5>
        <h6><u>Imanda Website</u></h6>
        <div className='center'>

        <button><MdEmail />Email</button>
        </div>
    </nav>
  )
}

export default Header