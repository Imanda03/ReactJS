import React from 'react'

const Main = (props) => {
  return (
    <div className='mainBody'>
        <h1>Welcome back {props.user}</h1>
    </div>
  )
}

export default Main