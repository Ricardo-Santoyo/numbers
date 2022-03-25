import React from 'react';
import { ReactComponent as DeleteIcon } from '../icons/delete.svg';

function Numpad(props) {
  const numpad = [[7,8,9], [4,5,6], [1,2,3]]

  function handleClick(num) {
    num = props.input + num;
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
        <span onClick={() => handleClick("del")}><DeleteIcon /></span>
        <span onClick={() => handleClick(0)}>0</span>
        <span></span>
      </div>
    </div>
  );
}

export default Numpad;