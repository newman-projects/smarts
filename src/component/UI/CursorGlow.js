// Updated cursor glow component to match the ball design

import React, { useEffect } from 'react';

const CursorGlow = () => {
  useEffect(() => {
    // Create cursor element
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    cursor.id = 'custom-cursor';
    document.body.appendChild(cursor);

    // Mouse move handler
    const handleMouseMove = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    // Mouse enter handler for interactive elements
    const handleMouseEnter = () => {
      cursor.classList.add('hover');
    };

    // Mouse leave handler for interactive elements
    const handleMouseLeave = () => {
      cursor.classList.remove('hover');
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      if (cursor && cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default CursorGlow;