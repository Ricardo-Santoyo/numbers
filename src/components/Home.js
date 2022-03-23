import React from 'react';
import ChoiceBlock from './ChoiceBlock';

function Home() {

  return (
    <div className="Home">
      <h1>Numbers!</h1>
      <div className='ChoiceContainer'>
        <ChoiceBlock symbol="+" name ="Add" />
      </div>
    </div>
  );
}

export default Home;