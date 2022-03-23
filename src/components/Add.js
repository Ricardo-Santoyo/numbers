import React from 'react';
import ChoiceBlock from './ChoiceBlock';
import { ReactComponent as ShuffleIcon } from '../icons/shuffle.svg';
import { ReactComponent as TableIcon } from '../icons/table.svg';

function Add() {

  return (
    <div className="SelectMode">
      <h1 className="Header">Add</h1>
      <div className="Container">
        <ChoiceBlock symbol={<ShuffleIcon />} name ="Random" />
        <ChoiceBlock symbol={<TableIcon />} name ="Tables" />
      </div>
    </div>
  );
}

export default Add;