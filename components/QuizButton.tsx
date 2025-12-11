import React from 'react';
import { motion } from 'framer-motion';

interface QuizButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'icon';
}

export const QuizButton: React.FC<QuizButtonProps> = ({ 
  onClick, 
  disabled = false, 
  children, 
  className = '',
  variant = 'primary'
}) => {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center justify-center
        rounded-[10px] border border-[rgba(150,229,255,0.05)]
        bg-btn-gradient
        transition-shadow duration-200
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-[0_4px_12px_rgba(150,229,255,0.4)]'}
        ${variant === 'primary' ? 'h-[50px] px-8' : 'w-[53px] h-[50px]'}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};