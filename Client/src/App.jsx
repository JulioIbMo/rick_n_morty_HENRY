import './App.css';
import Cards from './components/cards/Cards';
import Nav from './components/nav/Nav';
import characters, {Rick} from "./data.js";

const App = () => {

  return (
    <div className='App'>
      <Nav/>
      <Cards characters={characters}/>
    </div>
  )
}

export default App
