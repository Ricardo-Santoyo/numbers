import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SelectMode from './components/SelectMode';
import Random from './components/Random';
import SelectTable from './components/SelectTable';
import Table from './components/Table';
import Algebra from './components/Algebra';
import Expressions from './components/Expressions';
import Calculus from './components/Calculus';
import add from './mathFunctions/add';
import subtract from './mathFunctions/subtract';
import multiply from './mathFunctions/multiply';
import divide from './mathFunctions/divide';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/add" element={<SelectMode operation="Add" />} />
        <Route exact path="/add/random" element={<Random sign="+" operation={add} />} />
        <Route exact path="/add/tables" element={<SelectTable operation={"Add"} />} />
        <Route exact path="/add/tables/:id" element={<Table sign="+" operation={add} />} />

        <Route exact path="/subtract" element={<SelectMode operation="Subtract" />} />
        <Route exact path="/subtract/random" element={<Random sign="−" operation={subtract} />} />
        <Route exact path="/subtract/tables" element={<SelectTable operation={"Subtract"} />} />
        <Route exact path="/subtract/tables/:id" element={<Table sign="−" operation={subtract} />} />

        <Route exact path="/multiply" element={<SelectMode operation="Multiply" />} />
        <Route exact path="/multiply/random" element={<Random sign="×" operation={multiply} />} />
        <Route exact path="/multiply/tables" element={<SelectTable operation={"Multiply"} />} />
        <Route exact path="/multiply/tables/:id" element={<Table sign="×" operation={multiply} />} />

        <Route exact path="/divide" element={<SelectMode operation="Divide" />} />
        <Route exact path="/divide/random" element={<Random sign="÷" operation={divide} />} />
        <Route exact path="/divide/tables" element={<SelectTable operation={"Divide"} />} />
        <Route exact path="/divide/tables/:id" element={<Table sign="÷" operation={divide} />} />

        <Route exact path="/algebra" element={<Algebra />} />
        <Route exact path="algebra/expressions" element={<Expressions />} />

        <Route exact path="/calculus" element={<Calculus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
