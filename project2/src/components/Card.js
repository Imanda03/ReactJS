import React from 'react'
import {FaStar} from "react-icons/fa"
import image1 from "../image/image1.jpg"
import image2 from "../image/image2.jpg"
import image3 from "../image/image3.jpg"

const Card = () => {
  return (
    <div className='card'>
        <section>

        <img src={image1} className="card-image1"/>
        <div className='card-stats'>
            <FaStar />
            <span>5.0</span>
            <span>(6) .</span>
            <span>USA</span>
        </div>
        <p>Friend</p>
        <p>Have fun</p>
        </section>
        <section>

        <img src={image2} className="card-image1"/>
        <div className='card-stats'>
            <FaStar />
            <span>5.0</span>
            <span>(6) .</span>
            <span>USA</span>
        </div>
        <p>Friend</p>
        <p>Have fun</p>
        </section>
        <section>

        <img src={image3} className="card-image1"/>
        <div className='card-stats'>
            <FaStar />
            <span>5.0</span>
            <span>(6) .</span>
            <span>USA</span>
        </div>
        <p>Friend</p>
        <p>Have fun</p>
        </section>
    </div>

  )
}

export default Card