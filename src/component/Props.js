import React from 'react'

export const Props = (prop) => {
  return (
    <div>
      <h1>Hello {prop.name}</h1>
      {prop.children}

    </div>
  )
}

export default Props
