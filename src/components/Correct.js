import React from 'react';
import useTimer from './useTimer';
import { ReactComponent as CheckIcon } from '../icons/check.svg';

function Correct() {
  const counter = useTimer();

  return (
    <div className="ResultContainer">
      <div className="Correct"> 
        <span>Correct!</span>
        <CheckIcon />
        <span className="Next">Next Question in: {counter}</span>
      </div>
    </div>
  );
}

export default Correct;