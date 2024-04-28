import React, { useState } from 'react';
import FirstColumnContent from './FirstColumnContent';
import ThirdColumnContent from './ThirdColumnContent';
import Cal from './calendar';

const Grid = () => {
  const [myEvents, setMyEvents] = useState([]);
  return (
    <div> 
      <div className="mt-0 flex flex-col min-h-screen">
        <div className="bg-black text-white p-3">
          <h1 className="font-sans text-lg font-bold" style={{ fontSize: '2rem' }}>
            AppName
          </h1>
        </div>
        
        <div className="flex-1 grid grid-cols-3" style={{ gridTemplateColumns: '1fr 2.75fr 1.25fr' }}>
          
          {/*Column One*/}
          <FirstColumnContent events = {myEvents} />

          {/*Column Two*/}
          <div  style={{ backgroundColor: 'rgba(255, 246, 163, 1)', height: '100%' }}>
            
            <p className='ml-0 px-4 mt-2 font-mono font-bold' style={{fontSize: '1.6rem' }}>Calendar.</p>
            <Cal myEvents = {myEvents} setMyEvents = {setMyEvents}/>
          </div>

          {/* Column Third */}
          <ThirdColumnContent events = {myEvents} setEvents={setMyEvents}/>

        </div>
        
        <div style={{ backgroundColor: 'black', color: 'white', height: '25px' }}>
          <marquee behavior="scroll" direction="left" loop="true">
            hello hello
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Grid;
