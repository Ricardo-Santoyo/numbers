import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SelectMode from './components/SelectMode';
import Random from './components/Random';
import add from './mathFunctions/add';
import subtract from './mathFunctions/subtract';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<SelectMode operation="Add" />} />
        <Route exact path="/add/random" element={<Random sign="+" operation={add} />} />
        <Route exact path="/subtract" element={<SelectMode operation="Subtract" />} />
        <Route exact path="/subtract/random" element={<Random sign="−" operation={subtract} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
