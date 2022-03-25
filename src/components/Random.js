import React, { useState } from 'react';
import Numpad from './Numpad';

function Random(props) {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 100));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 100));
  const [input, setInput] = useState('');

  function nextQuestion() {
    // Displays the next question on the screen.
    setNum1(Math.floor(Math.random() * 100));
    setNum2(Math.floor(Math.random() * 100));
    setInput('');
  }

  function checkResponse() {
    // Checks whether input is the correct answer or not.
    let answer = props.operation(num1, num2);
    if (input == answer) {
      setInput("Correct");
    } else {
      setInput("Incorrect");
    }
    setTimeout(nextQuestion, 3000);
  }

  return (
    <div>
      <h1 className="Header">Random</h1>
      <h2 className="Question">{`${num1} ${props.sign} ${num2} = ?`}</h2>
      <div className="Input">
        <h2>{input}</h2>
      </div>
      <Numpad input={input} setInput={setInput} checkResponse={checkResponse} />
    </div>
  );
}

export default Random;