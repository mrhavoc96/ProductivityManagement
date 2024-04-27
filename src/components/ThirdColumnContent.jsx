import React, { useState } from 'react';
import DigitalClock from './DigitalClock.jsx';
import DateDisplay from './DateDisplay.jsx';
import PomodoroCounter from './PomodoroCounter.jsx';

const ThirdColumnContent = ({events, setEvents}) => {
  const [showPomodoroCounter, setShowPomodoroCounter] = useState(false);

  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

  // Filter events that have today's date and store the original index
  const todayEvents = [];
events.forEach((event, index) => {
  const eventDate = new Date(event.start).toISOString().split('T')[0];
  if (eventDate === today) {
    todayEvents.push({
      ...event,
      originalIndex: index
    });
  }
});

  const togglePomodoroCounter = () => {
    setShowPomodoroCounter(!showPomodoroCounter);
  };

  const handleCheckboxToggle = (index) => {
    // Create a copy of the events array
  const updatedEvents = [...events];
  const eventIndex = todayEvents[index].originalIndex;
  // Toggle the checked property of the event at the specified index
  updatedEvents[eventIndex] = { ...updatedEvents[eventIndex], checked: !updatedEvents[index].checked };
  // Update the events state with the modified array
  setEvents(updatedEvents);
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
      <div>
        <ul>
          {todayEvents.length > 0 && todayEvents.map((event, index) => (
            <li key={index}>
            <input
              type="checkbox"
              checked={event.checked} // Use the appropriate property from the event object
              onChange={() => handleCheckboxToggle(index,event)} // Pass index to the toggle function
            /> 
            {event.title} 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ThirdColumnContent;
