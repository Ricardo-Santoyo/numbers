import React, { useEffect, useState } from 'react';
import Numpad from './Numpad';
import Correct from './Correct';
import Incorrect from './Incorrect';

function Question(props) {
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
    setStartTimer(false);
    setInput('');
    props.updateNums();
  }

  function checkResponse() {
    // Checks whether input is the correct answer or not.
    if (input == props.answer) {
      setInput("Correct");
    } else {
      setInput("Incorrect");
    }
    setStartTimer(true);
  }

  return (
    <div>
      <h2 className="Question">{`${props.num1} ${props.sign} ${props.num2} = ?`}</h2>
      <div className="Input">
        <h2>{input}</h2>
      </div>
      <Numpad input={input} setInput={setInput} checkResponse={checkResponse} sign={props.sign} />
      {input === "Correct" ? <Correct /> : null}
      {input === "Incorrect" ? <Incorrect answer={props.answer} /> : null}
    </div>
  );
}

export default Question;