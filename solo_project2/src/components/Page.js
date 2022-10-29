import React from 'react'
// import mt from "./image/Mount-Everest.png"

const page = (props) => {
  return (
    <div className='card'>
        <img src={props.item.coverImg} alt={props.item.tittle} />
            <div card-d>
            <h1 className='card-p'>{props.item.tittle}</h1>
                <span className='grey'>Start date: {props.item.startDate} - </span>
                <span className='grey'>End date: {props.item.endDate}</span>
                <p><span className='desc'>Location:</span> {props.item.location}</p>
                <span className='desc'>Description:</span><p className='para'>{props.item.description}</p>
            </div>
            
            </div>
            
  )
}

export default page