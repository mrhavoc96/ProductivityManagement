import React, { useState, useEffect, useRef } from 'react';

const AddTaskModal = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [timeSpacing, setTimeSpacing] = useState(1);

  const handleSliderChange = (e) => {
    setTimeSpacing(parseInt(e.target.value));
  };

  const handleSave = () => {
    const currentDate = new Date(); // Get current date and time
    const startDateTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), startTime.split(':')[0], startTime.split(':')[1]);
    const endDateTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), endTime.split(':')[0], endTime.split(':')[1]);
    const oldTitle = title + "#1";
    const originalEvent = { title:oldTitle, start: startDateTime, end: endDateTime };

    const adjustedStartDateTime = new Date(startDateTime);
    adjustedStartDateTime.setHours(adjustedStartDateTime.getHours() + timeSpacing * 7 * 24);
    const adjustedEndDateTime = new Date(endDateTime);
    adjustedEndDateTime.setHours(adjustedEndDateTime.getHours() + timeSpacing * 7 * 24);
    const newTitle = title + "#2";
    const timeSpacingEvent = { title:newTitle, start: adjustedStartDateTime, end: adjustedEndDateTime};

    const success = onSave([originalEvent, timeSpacingEvent]);
    if (success) {
        setTimeSpacing(1);
        setTitle('');
        setStartTime('');
        setEndTime('');
        onClose();
    }
    else {
        alert("The Task is Conflicting with existing task")
    } 
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center w-200 z-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="absolute bg-gray-900 opacity-50 inset-0"></div>
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg z-50">
        <h2 className="text-xl font-semibold mb-4">Add Task</h2>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700" style={{ marginBottom: '0.5rem' }}>Title</label>
          <input
            id="title"
            type="text"
            placeholder="Title"
            className="w-full p-2 border border-gray-300 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ padding: '0.5rem' }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="start-time" className="block text-sm font-medium text-gray-700" style={{ marginBottom: '0.5rem' }}>Start Time</label>
          <input
            id="start-time"
            type="time"
            className="w-full p-2 border border-gray-300 rounded"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            style={{ padding: '0.5rem' }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="end-time" className="block text-sm font-medium text-gray-700" style={{ marginBottom: '0.5rem' }}>End Time</label>
          <input
            id="end-time"
            type="time"
            className="w-full p-2 border border-gray-300 rounded"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            style={{ padding: '0.5rem' }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time-spacing" className="block text-sm font-medium text-gray-700" style={{ marginBottom: '0.5rem' }}>Time Spacing Duration</label>
          <input
            id="time-spacing"
            type="range"
            min="1"
            max="16"
            value={timeSpacing}
            onChange={handleSliderChange}
            className="w-full"
          />
          <div className="text-sm text-gray-700 flex justify-between">
            <span>1 Week</span>
            <span>4 Months</span>
          </div>
          <div className="text-sm text-gray-700 flex justify-between">
            {timeSpacing <= 4 ? (
            <span>Current: {timeSpacing} Weeks</span>
            ) : (
              <span>Current: {Math.floor(timeSpacing / 4)} Months {timeSpacing % 4 !== 0 && `${timeSpacing % 4} Weeks`}</span>
            )}
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={handleSave}>Save</button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded" onClick={() => {setTitle('');setStartTime('');setEndTime('');onClose();}}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
