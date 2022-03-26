import React from 'react';
import { ReactComponent as XIcon } from '../icons/xmark.svg';

function Incorrect() {

  return (
    <div className="ResultContainer">
      <div className="Incorrect"> 
        <span>Incorrect</span>
        <XIcon />
        <span className="Next">Next Question in: 3</span>
      </div>
    </div>
  );
}

export default Incorrect;