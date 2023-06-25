import Header from './components/header';
import Home from './components/home';
import './styles/App.css';
import {query1, query3} from './services/Connection';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      
      <header className="App-header">
        <h1>Para checar o resultado veja o console do navegador.</h1>
        <button onClick={query1}> query1</button>
        <button onClick={query3}> query3</button>
      </header>

    </div>
  );
}

export default App;

