import React, { useState } from 'react';
import DigitalClock from './DigitalClock.jsx';
import DateDisplay from './DateDisplay.jsx';
import PomodoroCounter from './PomodoroCounter.jsx';

const ThirdColumnContent = () => {
  const [showPomodoroCounter, setShowPomodoroCounter] = useState(false);

  const togglePomodoroCounter = () => {
    setShowPomodoroCounter(!showPomodoroCounter);
  };

  return (
    <div style={{ backgroundColor: 'rgba(211, 199, 255, 1)', height: '100%' }}>
      <div style={{ display: 'flex' }}>
        <div className="h-14 w-28 ml-2 mt-2 rounded-2xl relative mb-2" style={{ backgroundColor: 'rgba(233, 226,255, 1)' }}>
          <div className='ml-4 mt-2 py-0'>
            <DigitalClock />
          </div>
        </div>
        <div className='ml-4 mt-2 py-2' style={{ fontSize: '1.4rem', color: 'black' }}>
          <DateDisplay />
        </div>
      </div>
      <hr style={{ width: 'calc(100% - 20px)', margin: '0 auto', borderTop: '4px solid rgba(169,169,169,0.6)' }}></hr>

      <div>
        <p className='ml-0 px-4 mt-1 font-mono font-bold' style={{ fontSize: '1.6rem' }}>Tasks.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={togglePomodoroCounter}>Start Pomodoro</button>
        {showPomodoroCounter && <PomodoroCounter setPomodoroState={setShowPomodoroCounter} />}
      </div>
    </div>
  );
};

export default ThirdColumnContent;
