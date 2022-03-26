import React from 'react';
import useTimer from './useTimer';
import { ReactComponent as XIcon } from '../icons/xmark.svg';

function Incorrect(props) {
  const counter = useTimer();

  return (
    <div className="ResultContainer">
      <div className="Incorrect"> 
        <span>Incorrect</span>
        <XIcon />
        <span className="Next">The correct answer was: {props.answer}</span>
        <span className="Next">Next Question in: {counter}</span>
      </div>
    </div>
  );
}

export default Incorrect;