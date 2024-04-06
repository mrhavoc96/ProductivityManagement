import React from 'react';

const Marquee = () => {
  return (
    <div className="mt-0 flex flex-col min-h-screen">
        <marquee behavior="scroll" direction="left">
          heloo woowlrld 
        </marquee>
    </div>
  );
};

export default Marquee;
