import React, { useEffect, useState } from 'react';
import Numpad from './Numpad';
import Correct from './Correct';
import Incorrect from './Incorrect';
import randomNumArray from '../mathFunctions/randomNumArray';

function Random(props) {
  const [nums, setNums] = useState(randomNumArray(2));
  const [input, setInput] = useState('');
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    if (startTimer) {
      const timer = setTimeout(nextQuestion, 3000);
      return () => clearTimeout(timer);
    }
  }, [startTimer])

  function nextQuestion() {
    // Displays the next question on the screen.
    setNums(randomNumArray(2));
    setInput('');
    setStartTimer(false);
  }

  function checkResponse() {
    // Checks whether input is the correct answer or not.
    let answer = props.operation(nums[0], nums[1]);
    if (input == answer) {
      setInput("Correct");
    } else {
      setInput("Incorrect");
    }
    setStartTimer(true);
  }

  return (
    <div>
      <h1 className="Header">Random</h1>
      <h2 className="Question">{`${nums[0]} ${props.sign} ${nums[1]} = ?`}</h2>
      <div className="Input">
        <h2>{input}</h2>
      </div>
      <Numpad input={input} setInput={setInput} checkResponse={checkResponse} sign={props.sign} />
      {input === "Correct" ? <Correct /> : null}
      {input === "Incorrect" ? <Incorrect /> : null}
    </div>
  );
}

export default Random;