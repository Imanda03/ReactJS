import React from 'react'

const Header = (props) => {
  return (
    <div className='header'>
        <h1 id='headerId'>Current user: {props.user}</h1>
    </div>
  )
}

export default Header