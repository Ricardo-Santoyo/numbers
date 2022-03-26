import React, { useState } from 'react';
import Question from './Question';

function Table(props) {
  const [nums, setNums] = useState([1,1]);
  let answer = props.operation(nums[0], nums[1]);

  function updateNums() {
    setNums([nums[0], nums[1] + 1]);
  }

  return (
    <div>
      <h1 className="Header">Table</h1>
      <Question num1={nums[0]} num2={nums[1]} updateNums={updateNums} sign={props.sign} answer={answer} />
    </div>
  );
}

export default Table;