import React, { useState } from 'react';
import sampleImage from './imgg.jpg'; // Replace with the actual path to your image

const Box = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='relative w-64 h-96 bg-red-700 rounded-md transition-transform'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        opacity: isHovered ? 1 : 0.2,
        transform: isHovered ? 'scale(1.05) translateY(-10px)' : 'scale(1) translateY(0)',
        transition: 'transform 0.5s, opacity 0.5s',
      }}
    >
      {/* Larger circle with an image */}
      <div className='absolute top-10 left-1/2 transform -translate-x-1/2 bg-white w-40 h-40 rounded-full overflow-hidden'>
        <img src={sampleImage} alt='Circle Image' className='w-full h-full object-cover' />
      </div>

      <h1 className='text-black absolute bottom-2'>This is some random text.</h1>
    </div>
  );
};

export default Box;
