import React from 'react'
// import ReactDOM  from 'react'

const AddThings = () => {

    const [thingArray, setThingArray] = React.useState(['Thing 1', 'Thing 2'])

    function addItem(){

        setThingArray(prevElement => {
            return [...prevElement, `Thing ${thingArray.length + 1}`]
        })

    }

    const thingElements = thingArray.map(thing=> <p key={thing}>{thing}</p>)

  return (
    <div>
        <button onClick={addItem}>Add Items</button>
        {thingElements}
    </div>
  )
}

export default AddThings