import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Random from './components/Random';
import add from './mathFunctions/add';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<Add />} />
        <Route exact path="/add/random" element={<Random sign="+" operation={add} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
