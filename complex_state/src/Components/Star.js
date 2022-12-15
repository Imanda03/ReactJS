import React from 'react'
import star from "./Image/star.png"
import jd from "./Image/1.jpg"

const Star = (props) => {
    let immg =  props.isFilled? star : jd
  return (
         <img 
                src={immg} 
                className="card--favorite"
                onClick={props.handleClick}
           />
    
  )
}

export default Star