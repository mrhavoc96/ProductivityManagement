import React from 'react';
import SampleImage from './dpimg.png';
import heart from './heart.png';
import trophy from './trophy.png';
import coin from './coin.png';

const FirstColumnContent = ({events}) => {
  const checkedCount = events.filter(event => event.checked).length;
  const totalCount = events.length;

  return (
    <div style={{ backgroundColor: 'rgba(242, 217, 87, 1)', height: '100%' }}>
      <p className='ml-0 px-4 mt-2 font-mono font-bold' style={{ fontSize: '1.6rem' }}>Statistics.</p>
      <div className="h-36 w-72 mx-auto rounded-2xl relative" style={{ backgroundColor: 'rgba(247, 226,117, 1)' }}>
        <div className="h-16 w-16 ml-1 pt-1.5 px-1 rounded-full absolute top-0 left-0">
          <img src={SampleImage} alt='Circle Image' className='w-full h-full object-cover rounded-full' />
        </div>
        <div className='ml-20 mt-1'>
          <p className='text-white font-mono mt-3' >Streak:</p>
          <p className="text-white font-bold text-4xl" style={{ textShadow: '1px 1px 3px black rgba(0, 0, 0, 1)' }}>DAY X!</p>
        </div>
        <div>
          <p className='ml-2.5 text-white font-extrabold text-2xl' style={{ letterSpacing: '0.1em' }}>Username</p>
        </div>
      </div>
      {/* Equidistant lines */}
      <div className='mt-8 ml-4 mr-4'>
        <div className="border-t border-gray-500 w-4.5/5 h-12">
          <img src={heart} alt='Heart image' className='w-10 h-10 object-cover mt-2' />
        </div>
        <div className="border-t border-gray-500 w-4.5/5 h-12">
          <img src={trophy} alt='trophy image' className='w-8 h-8 ml-1 object-cover mt-2' />
        </div>
        <div className="border-t border-gray-500 w-4.5/5 h-12">
          <img src={coin} alt='trophy image' className='w-8 h-8  object-cover mt-2' />
        </div>
        <div className="border-t border-gray-500 w-4.5/5 h-8"></div>
          <p> {checkedCount} / {totalCount} </p>
        <div className="border-t border-gray-500 w-4.5/5 h-8"></div>
      </div>
    </div>
  );
};

export default FirstColumnContent;
