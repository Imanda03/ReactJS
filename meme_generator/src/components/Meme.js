import React from 'react'
import {FaImage} from "react-icons/fa"
import MemeData from './MemeData'


const Meme = () => {

    function getMemeImg(e){
        e.preventDefault()
        const memeData = MemeData.data.memes
        const randomNUmber = Math.floor(Math.random() * memeData.length)
        console.log(randomNUmber)
        const url = memeData[randomNUmber].url
    }

  return (
    <div className='meme-body'>
        <form className='form'>

            <input  type="text" className='first' placeholder='top text'/>
            <input  type="text" className='first' placeholder='bottom text'/>
            <button 
                className='form-button'
                onClick={getMemeImg}
            >
                Get a meme image <FaImage /></button>
        </form>
    </div>
  )
}

export default Meme