import React, { useMemo } from 'react';

export default function KeffiyehPattern() {
  // Generate unique IDs for each instance to prevent conflicts
  const uniqueIds = useMemo(() => ({
    pattern: `keffiyeh-${Math.random().toString(36).substr(2, 9)}`,
    gradient: `fade-gradient-${Math.random().toString(36).substr(2, 9)}`
  }), []);

  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.06]" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id={uniqueIds.pattern} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            {/* Diamond grid lines */}
            <line x1="0" y1="20" x2="20" y2="0" stroke="#000" strokeWidth="1.5"/>
            <line x1="20" y1="0" x2="40" y2="20" stroke="#000" strokeWidth="1.5"/>
            <line x1="40" y1="20" x2="20" y2="40" stroke="#000" strokeWidth="1.5"/>
            <line x1="20" y1="40" x2="0" y2="20" stroke="#000" strokeWidth="1.5"/>
            {/* Oval/leaf node at each intersection */}
            <ellipse cx="20" cy="0" rx="5" ry="3" fill="#000" transform="rotate(45,20,0)"/>
            <ellipse cx="40" cy="20" rx="5" ry="3" fill="#000" transform="rotate(135,40,20)"/>
            <ellipse cx="20" cy="40" rx="5" ry="3" fill="#000" transform="rotate(45,20,40)"/>
            <ellipse cx="0" cy="20" rx="5" ry="3" fill="#000" transform="rotate(135,0,20)"/>
          </pattern>
          <linearGradient id={uniqueIds.gradient} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0"/>
            <stop offset="100%" stopColor="white" stopOpacity="1"/>
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${uniqueIds.pattern})`}/>
        <rect width="100%" height="100%" fill={`url(#${uniqueIds.gradient})`}/>
      </svg>
    </div>
  );
}
