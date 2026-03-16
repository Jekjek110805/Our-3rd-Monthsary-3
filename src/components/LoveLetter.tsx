import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';

export const LoveLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#FFC0CB', '#FF6FA5', '#FFFFFF'],
      shapes: ['circle'],
    });
  };

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-3xl font-serif italic text-rose-300 mb-12">I wrote something from my heart.</h2>
      
      <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer group"
              onClick={handleOpen}
            >
              <div className="w-64 h-44 bg-rose-100 rounded-lg shadow-2xl relative overflow-hidden flex items-center justify-center border-2 border-rose-200">
                <div className="absolute top-0 left-0 w-full h-full border-[20px] border-transparent border-t-rose-200/50" />
                <div className="text-rose-400 text-4xl group-hover:scale-125 transition-transform">💌</div>
              </div>
              <p className="text-center mt-6 text-white/60 uppercase tracking-[0.3em] text-xs">Open My Letter</p>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              className="bg-white p-8 md:p-12 rounded-lg shadow-2xl max-w-md w-full text-zinc-800 font-serif leading-relaxed relative"
            >
              <div className="absolute -top-4 -left-4 text-4xl">✨</div>
              <div className="absolute -bottom-4 -right-4 text-4xl">✨</div>
              
              <p className="mb-4 text-lg">My love,</p>
              <p className="mb-4">
                These past three months with you have been one of the most beautiful experiences of my life.
              </p>
              <p className="mb-4">
                You make my world brighter, happier, and more meaningful.
              </p>
              <p className="mb-4">
                Thank you for your patience, your sacrifices, and for always choosing us.
              </p>
              <p className="mb-4">
                Every laugh, every moment, every memory we share means so much to me.
              </p>
              <p className="mb-6">
                You are someone incredibly special to me, and I am grateful every day that I have you in my life.
              </p>
              <p className="mb-2">Happy 3rd Monthsary, my love.</p>
              <p className="font-bold text-rose-600">I love you more than words can explain. ❤️</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
