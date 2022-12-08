import React from 'react'

const Test = () => {

    const [isFine,setIsFine] = React.useState(true)

    function mindChange(){
        setIsFine(prevState => prevState ? false : true)
    }

  return (
    <div>
        <h1>Is Good to go out or not?</h1>
        <div onClick={mindChange} >
            <h1>{isFine ? "Yes" : "No"}</h1>
        </div>
    </div>
  )
}

export default Test