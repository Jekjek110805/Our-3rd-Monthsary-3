import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';

const questions = [
  {
    question: "When did we start our relationship?",
    options: ["3 months ago", "6 months ago", "1 year ago", "Yesterday"],
    correct: 0,
  },
  {
    question: "Who said I love you first?",
    options: ["Me", "You", "Both at once", "It's a secret"],
    correct: 0, // Assuming "Me" (the user) for the quiz logic, or can be customized
  },
  {
    question: "What is our favorite thing to do together?",
    options: ["Watching movies", "Talking for hours", "Eating out", "Everything"],
    correct: 3,
  },
];

export const Quiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (index: number) => {
    if (index === questions[currentStep].correct) {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFC0CB', '#FF6FA5', '#FFFFFF'],
      });

      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setIsFinished(true);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
      <AnimatePresence mode="wait">
        {!isFinished ? (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-serif italic text-rose-300 text-center">
              {questions[currentStep].question}
            </h3>
            <div className="grid gap-3">
              {questions[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-rose-500/20 hover:border-rose-500/50 transition-all text-white/80 text-sm"
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-4"
          >
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="text-2xl font-serif text-white">You know us perfectly ❤️</h3>
            <p className="text-white/60 text-sm italic">Every little detail of our story is etched in my heart.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
