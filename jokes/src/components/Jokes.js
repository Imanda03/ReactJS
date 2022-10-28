import React from 'react'

const jokes = (props) => {
  return (
    <div>
        <h1>Setup: {props.setup}</h1>
        <p>Pounchline: {props.pounchline}</p>
        <hr />
    </div>
  )
}

export default jokes