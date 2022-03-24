import React, { useState } from 'react';
import Numpad from './Numpad';

function Random(props) {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 100))
  const [num2, setNum2] = useState(Math.floor(Math.random() * 100))

  return (
    <div>
      <h1 className="Header">Random</h1>
      <h2 className="Question">{`${num1} ${props.sign} ${num2} = ?`}</h2>
      <Numpad />
    </div>
  );
}

export default Random;