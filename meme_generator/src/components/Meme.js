import React from 'react'
import {FaImage} from "react-icons/fa"
import memeData from './MemeData'


const Meme = () => {

    // const [memeImage, setMemeImage] = React.useState("")
    const[meme, setMeme] = React.useState({
        topText : "",
        buttomText : "",
        randomImg : "https://i.imgflip.com/23ls.jpg"
    })

    const[allMemeImage, setAllMemeImage] = React.useState(memeData)

    function getMemeImg(e){
        e.preventDefault()
        const memesArray = allMemeImage.data.memes
        const randomNUmber = Math.floor(Math.random() * memesArray.length)
        console.log(randomNUmber)
        const url = memesArray[randomNUmber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg : url
        }))
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

        <img src={meme.randomImg} className="form-img"/>
    </div>
  )
}

export default Meme