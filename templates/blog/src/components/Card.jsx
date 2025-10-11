import React from 'react';

export default function Card({ children, className = '', hover = true }) {
  return (
    <div className={`card ${className} ${hover ? 'hover:-translate-y-1' : ''}`}>
      {children}
    </div>
  );
}

