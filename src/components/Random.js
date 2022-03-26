import React, { useState } from 'react';
import Question from './Question';
import randomNumArray from '../mathFunctions/randomNumArray';

function Random(props) {
  const [nums, setNums] = useState(randomNumArray(2));
  let answer = props.operation(nums[0], nums[1]);

  function updateNums() {
    setNums(randomNumArray(2));
  }

  return (
    <div>
      <h1 className="Header">Random</h1>
      <Question num1={nums[0]} num2={nums[1]} updateNums={updateNums} sign={props.sign} answer={answer} />
    </div>
  );
}

export default Random;