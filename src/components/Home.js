import React from 'react';
import ChoiceBlock from './ChoiceBlock';

function Home() {

  return (
    <div className="Home">
      <h1 className='Header'>Numbers!</h1>
      <div className='ChoiceContainer'>
        <div className='Container'>
          <ChoiceBlock symbol="+" name ="Add" link="add"/>
          <ChoiceBlock symbol="−" name ="Subtract" link="subtract"/>
        </div>
        <div className='Container'>
          <ChoiceBlock symbol="×" name ="Multiply" link="multiply"/>
          <ChoiceBlock symbol="÷" name ="Divide" link="divide"/>
        </div>
        <div className='Container small'>
          <ChoiceBlock symbol="𝑦 = 𝑥" name ="Algebra" link="algebra"/>
        </div>
      </div>
    </div>
  );
}

export default Home;