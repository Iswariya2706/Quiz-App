import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QUESTIONS, TOTAL_QUESTIONS } from './constants';
import { QuizState, AnimationDirection } from './types';
import { Background } from './components/Background';
import { QuestionScreen } from './components/QuestionScreen';
import { ResultScreen } from './components/ResultScreen';

const App: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: {},
    isCompleted: false,
  });
  
  const [direction, setDirection] = useState<AnimationDirection>(0);

  const handleSelectOption = (option: string) => {
    setQuizState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [QUESTIONS[prev.currentQuestionIndex].id]: option
      }
    }));
  };

  const handleNext = () => {
    if (quizState.currentQuestionIndex < TOTAL_QUESTIONS - 1) {
      setDirection(1);
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
    } else {
      // Submit
      setQuizState(prev => ({
        ...prev,
        isCompleted: true
      }));
    }
  };

  const handlePrev = () => {
    if (quizState.currentQuestionIndex > 0) {
      setDirection(-1);
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1
      }));
    }
  };

  const handleRestart = () => {
    setQuizState({
      currentQuestionIndex: 0,
      answers: {},
      isCompleted: false,
    });
    setDirection(0);
  };

  const calculateScore = () => {
    let score = 0;
    QUESTIONS.forEach(q => {
      if (quizState.answers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const currentQuestion = QUESTIONS[quizState.currentQuestionIndex];
  const selectedOption = quizState.answers[currentQuestion.id];

  return (
    <div 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden transition-all duration-500"
      style={{
        background: quizState.isCompleted 
          ? '#f4fdff' 
          : 'linear-gradient(180deg, #BECFEE 0%, #71C6E2 50%, #D9F4FA 75%, #BECFEE 100%)'
      }}
    >
      
      {/* Only show decorative aurora background when quiz is NOT completed */}
      {!quizState.isCompleted && <Background />}

      {/* Main Container */}
      <div 
        className={`relative w-[95%] max-w-[1280px] h-[85vh] min-h-[550px] max-h-[800px] rounded-[30px] flex items-center justify-center transition-all duration-500 z-10 
        ${!quizState.isCompleted ? 'p-3 md:p-4' : 'p-0'}`}
        style={{
          background: quizState.isCompleted 
            ? '#f4fdff' 
            : 'rgba(255, 255, 255, 0.3)',
          border: quizState.isCompleted ? 'none' : '1px solid rgba(255, 255, 255, 0.8)',
          boxShadow: quizState.isCompleted ? 'none' : '0px 44px 69px rgba(0, 0, 0, 0.15)',
          backdropFilter: quizState.isCompleted ? 'none' : 'blur(20px)',
          WebkitBackdropFilter: quizState.isCompleted ? 'none' : 'blur(20px)',
        }}
      >
        {/* Inner White Card - Always Solid Background */}
        <div className={`w-full h-full ${quizState.isCompleted ? 'rounded-[30px]' : 'rounded-[24px]'} py-6 px-6 md:px-12 flex flex-col items-center relative transition-colors duration-500 bg-[#f4fdff]`}>
          
          {!quizState.isCompleted ? (
            <QuestionScreen 
              question={currentQuestion}
              totalQuestions={TOTAL_QUESTIONS}
              currentIndex={quizState.currentQuestionIndex}
              selectedOption={selectedOption}
              onSelectOption={handleSelectOption}
              onNext={handleNext}
              onPrev={handlePrev}
              direction={direction}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
                <ResultScreen 
                score={calculateScore()}
                total={TOTAL_QUESTIONS}
                onRestart={handleRestart}
                />
            </div>
          )}

          {/* Decorative Paw GIF & Bubble */}
          {/* Only visible on xl screens (laptop/desktop) to avoid overlapping content on tablets/mobile */}
          {!quizState.isCompleted && quizState.currentQuestionIndex === 0 && (
             <div className="hidden xl:block absolute bottom-0 left-6 z-50 pointer-events-none">
                <div className="relative w-[140px] h-[140px]">
                   {/* Speech Bubble - Image Asset */}
                   <motion.img 
                     initial={{ opacity: 0, scale: 0.8, y: 10, rotate: -5 }}
                     animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                     transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                     src="https://res.cloudinary.com/dfu2mi3tm/image/upload/v1765448898/Group_jbm7ok.png"
                     alt="Best of Luck Bubble"
                     className="absolute top-[-50px] left-[-70px] w-[130px] h-auto z-50 origin-bottom-right"
                   />
                   
                   {/* Paw GIF */}
                   <motion.img 
                     initial={{ y: 50, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ delay: 0.2, duration: 0.5 }}
                     src="https://res.cloudinary.com/dfu2mi3tm/image/upload/v1765448899/749d79faabe3ab4ee8d83233bf1b15aa4471e72b_cuhbhz.gif"
                     alt="Waving Paw Mascot" 
                     className="absolute bottom-0 left-0 w-full h-full object-contain"
                   />
                </div>
             </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default App;