"use client";

import Image from 'next/image';
import Experience from './components/Experience';
import Nav from './components/Nav';
import About from './components/About';
import React from 'react';
import { useEffect, useState } from 'react';
import Mouseposition from './components/Mouseposition';
import Projects from './components/Projects';


export default function Home(){
  const mousePosition = Mouseposition();
  const [gradient, setGradient] = useState({background: null})

  useEffect(() => {
    const xcord = JSON.stringify(mousePosition.x);
    const ycord = JSON.stringify(mousePosition.y);
    setGradient({
      background: "radial-gradient(600px at " + xcord + "px" + " " + ycord + "px" + ", rgba(29, 78, 216, 0.15), transparent 80%)"
    })
    console.log(gradient)
  }, [mousePosition])
 
  
  return(
    <div className='min-h-screen min-w-full flex flex-col md:grid md:grid-cols-2 lg:pt-28 lg:pl-96 lg:pr-96' style={gradient}>
      <div className=' h-fit md:min-h-full min-w-full p-6 sticky'>
        <Nav/>
      </div>
      <div className='min-h-full min-w-full p-6'>
        <About/>
        <Experience/>
        <Projects/>
      </div>
    </div>
  )
}


