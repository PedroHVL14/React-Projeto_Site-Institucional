
import React from 'react';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ className = '', onClick }) => {
  return (
    <div className={`flex items-center ${className} cursor-pointer`} onClick={onClick}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        className="w-10 h-10 mr-2"
      >
        <rect 
          x="10" 
          y="10" 
          width="80" 
          height="80" 
          fill="#159895" 
          rx="15"
        />
        <path 
          d="M30 40 L50 60 L70 40" 
          stroke="#57C5B6" 
          strokeWidth="6" 
          fill="none"
        />
        <circle 
          cx="50" 
          cy="70" 
          r="10" 
          fill="#F4D03F"
        />
      </svg>
      <span className="text-2xl font-bold text-tech-blue">TecBrasil</span>
    </div>
  );
};

export default Logo;
