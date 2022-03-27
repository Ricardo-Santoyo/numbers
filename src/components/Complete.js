import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as CheckIcon } from '../icons/check.svg';
import { ReactComponent as BackIcon } from '../icons/back-arrow.svg';

function Complete(props) {
  const navigate = useNavigate();
  const operation = {"+":"Addition", "−":"Subtraction", "×":"Multiplication", "÷":"Division"}

  return (
    <div className="ResultContainer">
      <div className="Complete">
        <span>Congrats!</span>
        <CheckIcon />
        <span className="Next">You have completed the {props.table} {operation[`${props.sign}`]} Table!</span>

        <div className="GoBack" onClick={() => navigate(-1)}>
          <BackIcon />
          <span>Go Back</span>
        </div>
      </div>
    </div>
  );
}

export default Complete;