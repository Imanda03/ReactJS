import React from 'react';
import Boxes from './components/Boxes';
import Box from './components/Box';
import './App.css';

function App(props) {
    const [squares, setSqaures] = React.useState(Boxes);
    
    function toggle(id) {
      setSqaures(prevSqaure=>{
        const newSquares = [];
        for(let i = 0; i < prevSqaure.length; i++){
          const currentSquare = prevSqaure[i]
            if(currentSquare.id ===id){
              const updatedSquare ={
                ...currentSquare,
                on: !currentSquare.on
              }
              newSquares.push(updatedSquare)
            } 
              else{
                newSquares.push(currentSquare)
              }
            }
            return newSquares
        }
      )
    }
   const squareElement = squares.map(square => (
      <Box key={square.id} id={square.id} on={square.on}   toggle={toggle}/>
    ))
  return (
    <div className="App">
        {squareElement}
    </div>
  );
}

export default App;
