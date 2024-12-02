import './App.css';
import Comments from './components/comments/Comments';
import Counter from './components/counter/Counter';
import Swapi from './components/swapi/Swapi';
import Title from './components/title/Title';


function App() {
  return (
    <div className="App">
      <Title/>
      <Counter/>
      <Comments/>
      <Swapi/>
    </div>
  );
}

export default App;
