import { useEffect, useState } from 'react';

function useTimer() {
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  })

  return counter;
}

export default useTimer;