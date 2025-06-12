import React from 'react';
import jssLogo from '../assets/jsslogo.png';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = 'h-12 w-auto' }: LogoProps) {
  return (
    <img 
      src={jssLogo} 
      alt="JSS Polytechnic Logo" 
      className={className} 
    />
  );
}