import React from 'react';
import { Link } from 'react-router-dom';

function ChoiceBlock(props) {

  return (
    <Link to={props.link} className="ChoiceBlock">
      <h1>{props.symbol}</h1>
      <p>{props.name}</p>
    </Link>
  );
}

export default ChoiceBlock;