import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter} from 'react-router-dom'
import Body from './Body';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Body />
    </div>
    </BrowserRouter>
  );
}

export default App;
