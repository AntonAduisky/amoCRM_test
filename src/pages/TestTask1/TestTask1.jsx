import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Background from '../../components/Background/Background';

import './TestTask1.scss';

function TestTask1() {
  const [seconds, setSeconds] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const intervalRef = useRef();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleStart = () => {
    const secondsInput = parseInt(inputValue);

    if (!Number.isNaN(secondsInput)) {
      setSeconds(secondsInput);
      setInputValue('');
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setSeconds(0);
  };

  const formatTime = (seconds) => {
    const date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
  };

  useEffect(() => {
    if (seconds <= 0) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  }, [seconds]);

  return (
    <div className="test-task-1">
      <input placeholder="Секунды" type="text" value={inputValue} onChange={handleInputChange} />
      <div>
        <button onClick={handleStart}>Старт</button>
        <button onClick={handleStop}>Стоп</button>
      </div>

      {seconds <= 0 ? <span>Введите время!</span> : <span>{formatTime(seconds)}</span>}

      <Link to="/" className="Link">
        Главная
      </Link>

      <Background />
    </div>
  );
}

export default TestTask1;
