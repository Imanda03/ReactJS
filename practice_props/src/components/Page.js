import React from 'react'
// import cat1 from "../images/cat1.jpg"

const Page = (props) => {
  return (
    <section className='card'>
        <img src={props.img}  />
        <h3>{props.name}</h3>
        <p>{props.life}</p>
        
    </section>
  )
}

export default Page