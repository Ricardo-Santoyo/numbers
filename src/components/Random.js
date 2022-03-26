import React, { useState } from 'react';
import Numpad from './Numpad';
import Correct from './Correct';
import Incorrect from './Incorrect';
import randomNumArray from '../mathFunctions/randomNumArray';

function Random(props) {
  const [nums, setNums] = useState(randomNumArray(2));
  const [input, setInput] = useState('');

  function nextQuestion() {
    // Displays the next question on the screen.
    setNums(randomNumArray(2));
    setInput('');
  }

  function checkResponse() {
    // Checks whether input is the correct answer or not.
    let answer = props.operation(nums[0], nums[1]);
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
      <h2 className="Question">{`${nums[0]} ${props.sign} ${nums[1]} = ?`}</h2>
      <div className="Input">
        <h2>{input}</h2>
      </div>
      <Numpad input={input} setInput={setInput} checkResponse={checkResponse} />
      {input === "Correct" ? <Correct /> : null}
      {input === "Incorrect" ? <Incorrect /> : null}
    </div>
  );
}

export default Random;