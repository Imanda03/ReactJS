import React from 'react'

const UseOfState = () => {
    const[num, func] = React.useState(0);

  return (
    <div>
        <button>Decrease</button>
            <p>{num}</p>
        <button>Decrease</button>
    </div>
  )
}

export default UseOfState