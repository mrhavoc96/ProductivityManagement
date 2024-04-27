import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = `${time.getHours()}:${String(time.getMinutes()).padStart(2, '0')}`;

  return (
    <div>
      <p className="text-slate font-bold text-3xl">{formattedTime}</p>
    </div>
  );
};

export default DigitalClock;
