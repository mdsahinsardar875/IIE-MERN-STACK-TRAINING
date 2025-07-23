import React, { useState, useEffect, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0); 
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!isActive && time !== 0) {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isActive, time]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = Math.floor(time / 1000) % 60;
    const getSeconds = `0${seconds}`.slice(-2);
    const minutes = Math.floor(time / 60000);
    const getMinutes = `0${minutes}`.slice(-2);

    return `${getMinutes} : ${getSeconds} : ${getMilliseconds}`;
  };

  return (
    <div class="stopwatch" >
      <h1>Stopwatch</h1>
      <div  class="stopwatch_1"style={{ fontSize: '2rem', marginBottom: '1rem' }}>{formatTime(time)}</div>
      <button class="btn_1" onClick={handleStart}>Start</button>
      <button class="btn_2"onClick={handleStop}>Stop</button>
      <button class="btn_3"onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
