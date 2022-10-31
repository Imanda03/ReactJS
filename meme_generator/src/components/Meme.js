import React from 'react'
import {FaImage} from "react-icons/fa"
import MemeData from './MemeData'


const Meme = () => {

    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImg(e){
        e.preventDefault()
        const memeData = MemeData.data.memes
        const randomNUmber = Math.floor(Math.random() * memeData.length)
        console.log(randomNUmber)
        setMemeImage(memeData[randomNUmber].url)
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

        <img src={memeImage} className="form-img"/>
    </div>
  )
}

export default Meme