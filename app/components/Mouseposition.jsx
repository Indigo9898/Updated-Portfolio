import { useEffect, useState } from 'react'
import React from 'react';

const Mouseposition = () => {
    const [
      mousePosition,
      setMousePosition
    ] = React.useState({ x: null, y: null });
  
    useEffect(() => {
      const updateMousePosition = ev => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
      };
      
      window.addEventListener('mousemove', updateMousePosition);
  
      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
      };
    }, []);
  
    return mousePosition;
  };

  export default Mouseposition;