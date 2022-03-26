import React from 'react';
import ChoiceBlock from './ChoiceBlock';
import { ReactComponent as ShuffleIcon } from '../icons/shuffle.svg';
import { ReactComponent as TableIcon } from '../icons/table.svg';

function SelectMode(props) {

  return (
    <div className="SelectMode">
      <h1 className="Header">{props.operation}</h1>
      <div className="Container">
        <ChoiceBlock symbol={<ShuffleIcon />} name ="Random"  link="random" />
        <ChoiceBlock symbol={<TableIcon />} name ="Tables" link="tables" />
      </div>
    </div>
  );
}

export default SelectMode;