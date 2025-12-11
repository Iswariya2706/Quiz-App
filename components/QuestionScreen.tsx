import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Question } from '../types';
import { QuizButton } from './QuizButton';

interface QuestionScreenProps {
  question: Question;
  totalQuestions: number;
  currentIndex: number;
  selectedOption?: string;
  onSelectOption: (option: string) => void;
  onNext: () => void;
  onPrev: () => void;
  direction: number;
}

export const QuestionScreen: React.FC<QuestionScreenProps> = ({
  question,
  totalQuestions,
  currentIndex,
  selectedOption,
  onSelectOption,
  onNext,
  onPrev,
  direction
}) => {
  const segments = Array.from({ length: totalQuestions }, (_, i) => i);

  return (
    <div className="w-full max-w-[800px] h-full flex flex-col items-center relative z-30">
      
      {/* 1. HEADER SECTION - Compact Vertical Spacing */}
      <div className="w-full flex flex-col items-center shrink-0 mb-4">
        {/* Title */}
        <h1 className="font-dm italic text-[36px] md:text-[48px] leading-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-[#3cabda] text-center">
          Test Your Knowledge
        </h1>
        
        {/* Subtitle Pill */}
        <div className="bg-white rounded-lg px-6 py-1.5 shadow-[0_2px_4px_rgba(0,0,0,0.02)] inline-flex items-center justify-center mt-3 mb-5">
          <span className="text-brand-dark font-medium text-sm md:text-[15px] font-manrope">
            Answer all questions to see your results
          </span>
        </div>

        {/* Segmented Progress Bar */}
        <div className="w-full max-w-[600px] flex gap-2">
          {segments.map((index) => (
            <div 
              key={index}
              className={`h-1.5 rounded-full flex-1 transition-colors duration-300 ${
                index <= currentIndex 
                  ? 'bg-brand-dark' 
                  : 'bg-[#d1e4ea]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 2. CONTENT SECTION - Strictly Vertical, No Scrolling */}
      <div className="w-full flex flex-col flex-1 min-h-0 pt-2 pb-2">
        <AnimatePresence mode='wait' custom={direction}>
          <motion.div
            key={question.id}
            custom={direction}
            initial={{ x: direction * 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction * -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full flex flex-col items-center h-full"
          >
            {/* Question Box - Compact */}
            <div className="w-full min-h-[56px] md:min-h-[64px] px-6 py-2 flex items-center justify-center bg-gradient-to-r from-[#c6e9f7] to-[#e5f8ff] border border-brand-border rounded-[10px] mb-4 text-center shadow-sm shrink-0">
              <h2 className="text-brand-dark text-base md:text-lg font-semibold font-sans">
                {question.id}. {question.text}
              </h2>
            </div>

            {/* Options List - Compact */}
            <div className="w-full flex flex-col gap-3">
              {question.options.map((option) => {
                const isSelected = selectedOption === option;
                return (
                  <motion.button
                    key={option}
                    onClick={() => onSelectOption(option)}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.99 }}
                    className={`
                      w-full h-[48px] md:h-[54px] flex items-center justify-center rounded-[10px] border transition-all duration-200 shrink-0
                      ${isSelected 
                        ? 'bg-active-gradient border-brand-border ring-1 ring-[#96e5ff]' 
                        : 'bg-option-gradient border-[rgba(150,229,255,0.5)] hover:bg-option-gradient-hover hover:border-brand-border'
                      }
                    `}
                  >
                    <span className={`text-sm md:text-base font-semibold text-brand-dark font-sans`}>
                      {option}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. FOOTER SECTION - Pushed to bottom */}
      <div className="w-full shrink-0 mt-auto pt-4 flex justify-end gap-3 border-t border-transparent">
        <QuizButton 
          variant="icon" 
          onClick={onPrev} 
          disabled={currentIndex === 0}
          className="h-[46px] w-[46px]"
        >
           <ArrowLeft className="text-brand-dark w-5 h-5" />
        </QuizButton>

        {currentIndex === totalQuestions - 1 ? (
             <QuizButton 
             variant="primary" 
             onClick={onNext}
             disabled={!selectedOption}
             className="!w-[120px] h-[46px]"
           >
             <span className="text-brand-dark font-semibold text-sm font-sans">Submit</span>
           </QuizButton>
        ) : (
          <QuizButton 
            variant="icon" 
            onClick={onNext}
            disabled={!selectedOption}
            className="h-[46px] w-[46px]"
          >
             <ArrowRight className="text-brand-dark w-5 h-5" />
          </QuizButton>
        )}
      </div>

    </div>
  );
};