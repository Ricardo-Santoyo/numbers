import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Question from './Question';
import Complete from './Complete';

function Table(props) {
  let { id } = useParams();
  const min = (id === "standard") ? 1 : parseInt(id);
  const max = (id === "standard") ? 12 : (parseInt(id) + 9);
  const [nums, setNums] = useState([min,min]);
  const [completed, setCompleted] = useState(false);
  let answer = props.operation(nums[0], nums[1]);

  function updateNums() {
    if (nums[0] === max && nums[1] === max) {
      setCompleted(true);
    } else if (nums[1] === max) {
      setNums([nums[0] + 1, min]);
    } else {
      setNums([nums[0], nums[1] + 1]);
    }
  }

  return (
    <div>
      <h1 className="Header">Table</h1>
      <Question num1={nums[0]} num2={nums[1]} updateNums={updateNums} sign={props.sign} answer={answer} />
      {completed ? <Complete table="Standard" sign={props.sign} /> : null}
    </div>
  );
}

export default Table;