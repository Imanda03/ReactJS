import Page from './components/Page';
import './App.css';
import cat1 from "./images/cat1.jpg"
import cat2 from "./images/cat2.jpg"
import cat3 from "./images/cat3.jpg"
import cat4 from "./images/cat4.jpg"

function App() {
  return (
    <div className="contacts">
        <Page 
                img={cat1}
                name="Persian Cat"
                life="Average Lifespan: 12-17 Years"
             />
        <Page 
                img={cat3}
                name="Burmese Cat"
                life="Average Lifespan: 10-17 years"
             />
        <Page 
                img={cat4}
                name="Sphynx Cat"
                life="Average Lifespan: Around 15 years"
             />
        <Page 
                img={cat2}
                name="Scottish Fold"
                life="Average Lifespan: 11-15 Years"
             />
    </div>
  );
}

export default App;
