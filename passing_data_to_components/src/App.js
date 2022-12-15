import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App() {
  const [user, setUser] = React.useState("Sabina")
  return (
    <div className="App">
        <Header user={user} />
        <Main user={user}/>
    </div>
  );
}

export default App;
