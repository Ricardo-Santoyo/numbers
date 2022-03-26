import React from 'react';
import ChoiceBlock from './ChoiceBlock';
import { ReactComponent as TableIcon } from '../icons/table.svg';

function SelectTable(props) {

  return (
    <div className="SelectMode">
      <h1 className="Header">{props.operation}</h1>
      <div className="ChoiceContainer">
        <div className="Container">
          <ChoiceBlock symbol={<TableIcon />} name ="Standard" link="standard" />
          <ChoiceBlock symbol="10s" name="Tens" link="10" />
        </div>

        <div className="Container">
          <ChoiceBlock symbol="20s" name="Twenties" link="20" />
          <ChoiceBlock symbol="30s" name="Thirties" link="30" />
        </div>

        <div className="Container">
          <ChoiceBlock symbol="40s" name="Forties" link="40" />
          <ChoiceBlock symbol="50s" name="Fifties" link="50" />
        </div>

        <div className="Container">
          <ChoiceBlock symbol="60s" name="Sixties" link="60" />
          <ChoiceBlock symbol="70s" name="Seventies" link="70" />
        </div>

        <div className="Container">
          <ChoiceBlock symbol="80s" name="Eighties" link="80" />
          <ChoiceBlock symbol="90s" name="Nineties" link="90" />
        </div>
      </div>
    </div>
  );
}

export default SelectTable;