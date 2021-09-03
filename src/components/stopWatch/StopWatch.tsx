import React, { useState, useEffect } from 'react';
import Timer from '../timer/Timer';
import './stopWatch.css';

function StopWatch(props: any) {
  const { gameComplete, time, setTime } = props;
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  React.useEffect(() => {
    let interval: any = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time: number) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  

  useEffect(() => {
    handleStart();
  }, []);
  useEffect(() => {
    if(gameComplete) {
      setIsActive(false)
      setIsPaused(true)
      
    }
  }, [gameComplete])
  return (
    <div className="stop-watch">
      <Timer time={time} />
    </div>
  );
}

export default StopWatch;
