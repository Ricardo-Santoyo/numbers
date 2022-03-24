import React from 'react';

function Numpad() {
  const numpad = [[7,8,9], [4,5,6], [1,2,3], [0]]

  function handleClick(num) {
    console.log(num);
  }

  return (
    <div>
      <div className="Numpad">
        {numpad[0].map((n) => (<span key={n} onClick={() => handleClick(n)}>{n}</span>))}
      </div>

      <div className="Numpad">
        {numpad[1].map((n) => (<span key={n} onClick={() => handleClick(n)}>{n}</span>))}
      </div>

      <div className="Numpad">
        {numpad[2].map((n) => (<span key={n} onClick={() => handleClick(n)}>{n}</span>))}
      </div>

      <div className="Numpad">
        {numpad[3].map((n) => (<span key={n} onClick={() => handleClick(n)}>{n}</span>))}
      </div>
    </div>
  );
}

export default Numpad;