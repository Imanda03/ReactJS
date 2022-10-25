import React from 'react'
import {FaTwitter} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"

const footer = () => {
  return (
    <div className='footer'>
       <ul className='ul'>
       <li>< FaTwitter /></li> 
        <li><FaFacebook /></li>
        <li><FaInstagram /></li>
        <li><FaGithub /></li>
        </ul> 
    </div>
  )
}

export default footer