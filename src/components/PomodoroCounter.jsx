import React, { useState, useEffect } from 'react';

const PomodoroCounter = ({setPomodoroState}) => {
  const [count, setCount] = useState(45 * 60); // 45 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setCount(45 * 60);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setCount((prevCount) => Math.max(0, prevCount - 1)); // Decrement count by 1 every second
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const closeWindow = () => {
    setIsActive(false);
    setPomodoroState(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-75">
      <div className="relative bg-white p-8 rounded-lg w-3/4 h-3/4">
        <button className="absolute top-0 right-0 p-2" onClick={closeWindow}>
          <svg className="h-6 w-6 text-gray-600 hover:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-6xl font-bold mb-4 text-center">
          {formatTime(count)}
        </h2>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={startTimer}>Start</button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4" onClick={stopTimer}>Stop</button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4" onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default PomodoroCounter;
