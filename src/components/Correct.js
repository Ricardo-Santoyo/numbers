import React from 'react';
import { ReactComponent as CheckIcon } from '../icons/check.svg';

function Correct() {

  return (
    <div className="ResultContainer">
      <div className="Correct"> 
        <span>Correct!</span>
        <CheckIcon />
        <span className="Next">Next Question in: 3</span>
      </div>
    </div>
  );
}

export default Correct;