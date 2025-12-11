import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Abstract Aurora Gradients mimicking the SVG assets */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-200/40 rounded-full blur-[120px] mix-blend-multiply filter" />
      <div className="absolute top-[10%] right-[-10%] w-[60%] h-[60%] bg-cyan-200/40 rounded-full blur-[100px] mix-blend-multiply filter" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-sky-200/30 rounded-full blur-[100px] mix-blend-multiply filter" />
      
      {/* Subtle cloud texture overlay simulation */}
      <div className="absolute inset-0 opacity-30 bg-white/40" style={{ backdropFilter: 'blur(100px)' }}></div>
    </div>
  );
};