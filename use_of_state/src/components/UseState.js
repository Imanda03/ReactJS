import React from 'react'

const UseState = () => {
    const[num, func] = React.useState(0)

    function increaseNum(){
        func(preNum =>
            preNum + 1 )
    }

    function decreaseNum(){
        func(preNum => preNum - 1)
    }
  return (
    <div className='main'>
   
        <button onClick={increaseNum}>Increase</button>
          <p>{num}</p>
        <button onClick={decreaseNum}>Decrease</button>
   
    </div>
  )
}

export default UseState