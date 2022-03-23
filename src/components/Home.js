import React from 'react';
import ChoiceBlock from './ChoiceBlock';

function Home() {

  return (
    <div className="Home">
      <h1 className='Header'>Numbers!</h1>
      <div className='ChoiceContainer'>
        <div className='Container'>
          <ChoiceBlock symbol="+" name ="Add" />
          <ChoiceBlock symbol="−" name ="Subtract" />
        </div>
        <div className='Container'>
          <ChoiceBlock symbol="×" name ="Multiply" />
          <ChoiceBlock symbol="÷" name ="Divide" />
        </div>
      </div>
    </div>
  );
}

export default Home;