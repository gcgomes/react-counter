import './App.css';
import {useEffect, useState} from 'react'

const SECONDS_TOTAL = 60 * 60 - 1; // 1 hour

function App() {
  const [secondsAmount, setSecondsAmount] = useState(SECONDS_TOTAL);

  let minutes = String(Math.floor(secondsAmount/60)).padStart(2, '0');
  let seconds = String(secondsAmount % 60).padStart(2, '0');

  useEffect(() => {
    if (secondsAmount === 0) {
      alert('The counter came to a tragical end.');
      return;
    }

    setTimeout(() => setSecondsAmount(state => state - 1), 1000);
  }, [secondsAmount])

  return (
    <span>{minutes + ':' + seconds}</span>
  );
}

export default App;
