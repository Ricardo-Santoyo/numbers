import React from 'react';

function Numpad() {
  const numpad = [[7,8,9], [4,5,6], [1,2,3], [0]]

  return (
    <div>
      <div className="Numpad">
        {numpad[0].map((i) => (<span key={i}>{i}</span>))}
      </div>
      <div className="Numpad">
        {numpad[1].map((i) => (<span key={i}>{i}</span>))}
      </div>
      <div className="Numpad">
        {numpad[2].map((i) => (<span key={i}>{i}</span>))}
      </div>
      <div className="Numpad">
        {numpad[3].map((i) => (<span key={i}>{i}</span>))}
      </div>
    </div>
  );
}

export default Numpad;