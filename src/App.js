import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
