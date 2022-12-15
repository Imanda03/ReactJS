import React from 'react'

const Box = (props) => {

    // const [on, setOn] = React.useState(props.on)


    const styles = {
        background: props.on?"black":"darkRed"
      }

    // function toggle(){
    //     setOn(prevOn => prevOn? false : true)
    // }

  return (
    <div style={styles} className='box' onClick={()=>props.toggle(props.id)} > </div>
  )
}

export default Box