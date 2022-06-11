import React, { createElement } from "react";


//Using JSX
const Hello = () =>{
    // return(
// 
        // <div className='dummyClass'>
        /* <h1>Hello Anish</h1> */
        /* </div> */
    // )

    // Without using JSX
    // return React.createElement('div', null, 'h1', 'Heloo Anish')
    return React.createElement('div', {id:"hello", className:"dummyClass"},
     createElement('h1', null,  'Hello Anish'))
}

export default Hello;