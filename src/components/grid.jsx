import React from 'react';
import SampleImage from './dpimg.png';
import trophy from './trophy.png';
import heart from './heart.png';
import coin from './coin.png';

const Grid = () => {
  return (
    <div>
      <div className="mt-0 flex flex-col min-h-screen">
        <div className="bg-black text-white p-4">
          <h1 className="font-sans text-2xl font-bold" style={{ fontSize: '2.5rem' }}>
            AppName
          </h1>
        </div>
        
        <div className="flex-1 grid grid-cols-3" style={{ gridTemplateColumns: '1fr 3fr 1fr' }}>
          
          <div style={{ backgroundColor: 'rgba(242, 217, 87, 1)', height: '100%' }}>
            <p className='ml-0 px-4 mt-4 font-mono' style={{fontSize: '1.2rem' }}>Statistics.</p>
            
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
              <div class="border-t border-gray-500 w-4.5/5 h-12">
                <img src={heart} alt='Heart image' className='w-10 h-10 object-cover mt-2' />
              </div>
              <div class="border-t border-gray-500 w-4.5/5 h-12">
                <img src={trophy} alt='trophy image' className='w-8 h-8 ml-1 object-cover mt-2' />
              </div>
              <div class="border-t border-gray-500 w-4.5/5 h-12">
                <img src={coin} alt='trophy image' className='w-8 h-8  object-cover mt-2' />
              </div>
              <div class="border-t border-gray-500 w-4.5/5 h-8"></div>
              <div class="border-t border-gray-500 w-4.5/5 h-8"></div>
            </div>
          </div>

          <div className='text-center' style={{ backgroundColor: 'rgba(255, 246, 163, 1)', height: '100%' }}>Konnichiwa Wordo</div>
          
          <div className='text-center' style={{ backgroundColor: 'rgba(211, 199, 255, 1)', height: '100%' }}>Hallo World</div>
        </div>
        
        <div style={{ backgroundColor: 'black', color: 'white', height: '50px' }}>
          <marquee behavior="scroll" direction="left" loop="true">
            hello hello
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Grid;
