import React from 'react';

function ChoiceBlock(props) {

  return (
    <div className="ChoiceBlock">
      <h1>{props.symbol}</h1>
      <p>{props.name}</p>
    </div>
  );
}

export default ChoiceBlock;