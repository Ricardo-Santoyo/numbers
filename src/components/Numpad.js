import React from 'react';
import { ReactComponent as DeleteIcon } from '../icons/delete.svg';
import { ReactComponent as EnterIcon } from '../icons/enter.svg';
import convertToNeg from '../mathFunctions/convertToNeg';
import convertToDecimal from '../mathFunctions/convertToDecimal';

function Numpad(props) {
  const numpad = [[7,8,9], [4,5,6], [1,2,3]]

  function handleClick(num) {
    switch (num) {
      case "del":
        num = props.input.slice(0,-1);
        break;
      case "-":
        num = convertToNeg(props.input);
        break;
      case ".":
        num = convertToDecimal(props.input);
        break;
      default:
        num = props.input + num;
    }
    props.setInput(num);
  }

  return (
    <div>
      <div className="Numpad">
        {numpad[0].map((n) => (<span key={n} onClick={() => handleClick(n)}>{n}</span>))}
      </div>

      <div className="Numpad">
        {numpad[1].map((n) => (<span key={n} onClick={() => handleClick(n)}>{n}</span>))}
      </div>

      <div className="Numpad">
        {numpad[2].map((n) => (<span key={n} onClick={() => handleClick(n)}>{n}</span>))}
      </div>

      <div className="Numpad">
        {props.sign === "−" ? <span onClick={() => handleClick("-")}>+/−</span> : null}
        {props.sign === "÷" ? <span onClick={() => handleClick(".")}>.</span> : null}
        <span onClick={() => handleClick("del")}><DeleteIcon /></span>
        <span onClick={() => handleClick(0)}>0</span>
        <span onClick={props.checkResponse}><EnterIcon /></span>
      </div>
    </div>
  );
}

export default Numpad;