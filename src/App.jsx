import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
{/*import Box from './components/Box.jsx' 
import Hover from './hover.jsx'*/}
import Header from './components/header.jsx'
import Grid from './components/grid.jsx'




function App() {
  

  return (
    <>
    <div className=''>
        
        <Grid/>
        
        
    {/*</div>
     <div className='items-center'>
        <Hover/>
      </div>

    <div className = 'flex flex-col items-center justify-center h-screen' >
     
      
      <h1 className='font-bold underline'>ACES Website</h1>
      
      <div className = 'flex space-x-22 sm:space-x-8 md:space-x-12 lg:space-x-16'>
        <Box/>
        <Box/>
        <Box/>
      </div>*/}
    </div>
  </>
  )
}

export default App
