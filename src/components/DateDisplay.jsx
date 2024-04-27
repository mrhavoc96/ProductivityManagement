import React from 'react';

const DateDisplay = () => {
  const currentDate = new Date();
  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return (
    <div>
      <p className="text-white font-bold">{formattedDate}</p>
    </div>
  );
};

export default DateDisplay;
