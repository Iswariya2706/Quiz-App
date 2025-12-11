import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ResultScreenProps {
  score: number;
  total: number;
  onRestart: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ score, total, onRestart }) => {
  const percentage = Math.round((score / total) * 100);
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    // Simple count up animation
    const duration = 1500; // ms
    const steps = 60;
    const intervalTime = duration / steps;
    const increment = percentage / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= percentage) {
        setDisplayScore(percentage);
        clearInterval(timer);
      } else {
        setDisplayScore(Math.floor(current));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [percentage]);

  return (
    <div className="w-full flex flex-col items-center justify-center relative z-10 py-12">
      
      {/* Badge */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white px-8 py-2.5 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] mb-10"
      >
        <span className="text-brand-dark font-medium text-base">Keep Learning!</span>
      </motion.div>

      {/* Title */}
      <motion.h1 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="font-dm italic text-[48px] md:text-[64px] text-center text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-[#3cabda] mb-8"
      >
        Your Final score is
      </motion.h1>

      {/* Score Counter */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
        className="flex items-baseline justify-center gap-2 font-serif text-brand-accent mb-12"
      >
        <div className="text-[100px] md:text-[140px] font-bold leading-none tracking-tighter">
          {displayScore}
        </div>
        <span className="text-[48px] md:text-[64px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-[#3cabda]">
          %
        </span>
      </motion.div>

      {/* Restart Button */}
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={onRestart}
        whileHover={{ y: -2, boxShadow: '0 5px 15px rgba(150, 229, 255, 0.4)' }}
        whileTap={{ scale: 0.98 }}
        className="w-[200px] h-[50px] flex items-center justify-center rounded-[10px] border border-[rgba(150,229,255,0.05)] bg-btn-gradient cursor-pointer shadow-sm"
      >
        <span className="font-sans font-medium text-base text-brand-dark">Start Again</span>
      </motion.button>

    </div>
  );
};