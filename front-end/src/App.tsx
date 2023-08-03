import Header from './components/header';
import Home from './components/home';
import Rotas from './components/rotas';
import { BrowserRouter } from 'react-router-dom';
import './styles/App.css';
//import {query1, query3} from './services/Connection';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        
        <Rotas/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;

