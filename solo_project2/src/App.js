// import logo from './logo.svg';
import Page from './components/Page';
import NavBar from './components/NavBar';
import Data from "./components/Details"
// import img from "./components/image/Mount-Everest.png"
import './App.css';


function App() {

  const data = Data.map(items => {
    return(
      <Page
      key = {items.id}
      item = {items}
      />
    )
  })
  
  return (
    <div className="App">
      <NavBar />
      <section className='card-list'>
      {data}

      </section>
    </div>
  );
}

export default App;
