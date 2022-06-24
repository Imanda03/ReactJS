import React from 'react'

const functionClick = () => {
   function clickHandler() {
        console.log("button has been click!!")
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default functionClick;