// import logo from './logo.svg';]
import Jokes from "./components/Jokes"
import './App.css';

function App() {
  return (
    <div className="App">
        <Jokes
          setup="I got my daughter a fridge for her birthday."
          pounchline="I can't wait to see her face light up when she opens it."
          />
        <Jokes
          setup="How did the hacker escape the police?"
          pounchline="He just ransomware!"
         />
        <Jokes 
          setup="Why don't pirates travel on mountain roads?"
          pounchline="Scurvy."
        />
        <Jokes 
          setup="Why do bees stay in the hive in the winter?"
          pounchline="Swarm."
        />
        <Jokes 
          setup="What's the best thing about Switzerland?"
          pounchline="I don't know, but the flag is a big plus!"
        />
    </div>
  );
}

export default App;
