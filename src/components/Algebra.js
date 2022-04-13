import React from 'react';
import ChoiceBlock from './ChoiceBlock';

function Algebra() {

  return (
    <div className="Algebra">
      <h1 className="Header">Algebra</h1>
      <div className="Container xsmall">
        <ChoiceBlock symbol="2𝑥 + 1" name ="Expressions" link="expressions" />
        <ChoiceBlock symbol="(𝑥+3) (𝑥-2)" name ="Binomials" link="binomials" />
      </div>
    </div>
  );
}

export default Algebra;