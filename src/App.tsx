/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Heart, Sparkles, Music, ChevronDown, Calendar, Quote, Star, Mail, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { HeartParticles } from './components/HeartParticles';
import { StarrySky } from './components/StarrySky';
import { MusicPlayer } from './components/MusicPlayer';
import { Quiz } from './components/Quiz';
import { LoveLetter } from './components/LoveLetter';
import { HeartCursor } from './components/HeartCursor';

const TypewriterText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="text-2xl md:text-3xl font-serif italic text-rose-200"
    >
      {text}
    </motion.p>
  );
};

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [introStep, setIntroStep] = useState(0);
  const [showSecret, setShowSecret] = useState(false);

  useEffect(() => {
    if (showIntro) {
      const timers = [
        setTimeout(() => setIntroStep(1), 2000),
        setTimeout(() => setIntroStep(2), 4000),
        setTimeout(() => setIntroStep(3), 6000),
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [showIntro]);

  const handleOpenSurprise = () => {
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.5 },
      colors: ['#FFC0CB', '#FF6FA5', '#FFFFFF'],
      shapes: ['circle'],
    });
    setTimeout(() => setShowIntro(false), 500);
  };

  const gratitudeMessages = [
    "Thank you for loving me.",
    "Thank you for being patient with me.",
    "Thank you for the sacrifices you make for us.",
    "Thank you for always being there.",
    "You make my life brighter.",
    "I appreciate you more than words can explain."
  ];

  const timeline = [
    { month: "Month 1", desc: "The beginning of something beautiful." },
    { month: "Month 2", desc: "Getting closer and understanding each other more." },
    { month: "Month 3", desc: "Falling deeper in love with you." }
  ];

  const memories = [
    { url: "https://picsum.photos/seed/love1/600/800", caption: "Our first laughs together" },
    { url: "https://picsum.photos/seed/love2/600/800", caption: "A moment I never want to forget" },
    { url: "https://picsum.photos/seed/love3/600/800", caption: "My favorite smile" },
    { url: "https://picsum.photos/seed/love4/600/800", caption: "Just us being happy" }
  ];

  if (showIntro) {
    return (
      <div className="fixed inset-0 bg-[#111111] flex items-center justify-center z-[100] overflow-hidden">
        <HeartParticles />
        <div className="text-center space-y-8 px-6 relative z-10">
          <AnimatePresence mode="wait">
            {introStep === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <TypewriterText text="Hi my love..." />
              </motion.div>
            )}
            {introStep === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <TypewriterText text="I made something for you." />
              </motion.div>
            )}
            {introStep === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
                <h1 className="text-4xl md:text-6xl font-display text-rose-400 text-glow">Happy 3rd Monthsary ❤️</h1>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOpenSurprise}
                  className="px-8 py-4 bg-rose-500 text-white rounded-full font-medium shadow-[0_0_20px_rgba(255,111,165,0.4)] hover:bg-rose-600 transition-all"
                >
                  Open Your Surprise
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111] selection:bg-rose-500/30">
      <HeartCursor />
      <MusicPlayer />
      <HeartParticles />

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-500/10 via-transparent to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center max-w-3xl relative z-10"
        >
          <h1 className="text-5xl md:text-8xl font-display text-white mb-6 leading-tight">
            Happy 3rd Monthsary, <br />
            <span className="text-rose-400 text-glow">My Love ❤️</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-serif italic mb-12">
            "These past three months with you have been one of the most beautiful chapters of my life."
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/40"
          >
            <span className="text-xs uppercase tracking-[0.4em]">Scroll to start our story</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* Memories Gallery */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-5xl font-serif italic text-center mb-20 text-rose-300"
        >
          Our Memories Gallery
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {memories.map((memory, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden glass"
            >
              <img
                src={memory.url}
                alt={memory.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-serif italic text-lg">{memory.caption}</p>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-rose-500/30 transition-colors rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-6 bg-white/5 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif italic text-center mb-20 text-rose-300">Our Journey So Far</h2>
          <div className="space-y-12 relative before:absolute before:left-4 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-white/10">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-1/2 flex justify-center md:justify-end px-8">
                  <div className={`glass p-8 rounded-3xl w-full max-w-sm ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-rose-400 font-display text-4xl mb-2 block">{item.month}</span>
                    <p className="text-white/70 font-serif italic text-lg">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(255,111,165,0.8)] z-10" />
                <div className="w-full md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gratitude Section */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif italic mb-20 text-rose-300">Things I Want To Thank You For ❤️</h2>
        <div className="space-y-8">
          {gratitudeMessages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.3 }}
              className="flex items-center justify-center gap-4 group"
            >
              <Heart size={16} className="text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-xl md:text-2xl text-white/80 font-serif italic hover:text-rose-300 transition-colors cursor-default">
                {msg}
              </p>
              <Heart size={16} className="text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-32 px-6">
        <h2 className="text-3xl md:text-5xl font-serif italic text-center mb-20 text-rose-300">How Well Do You Know Our Love Story?</h2>
        <Quiz />
      </section>

      {/* Secret Button */}
      <section className="py-20 text-center relative overflow-hidden">
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => setShowSecret(true)}
          className="text-rose-400/30 hover:text-rose-400 text-xs uppercase tracking-[0.5em] transition-all duration-500"
        >
          Click if you miss me
        </motion.button>
        <AnimatePresence>
          {showSecret && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
              onClick={() => setShowSecret(false)}
            >
              <div className="glass p-12 rounded-3xl text-center max-w-sm relative">
                <div className="absolute -top-6 -left-6 text-4xl animate-bounce">💖</div>
                <div className="absolute -bottom-6 -right-6 text-4xl animate-bounce delay-150">💖</div>
                <p className="text-2xl font-serif italic text-white leading-relaxed">
                  "If you're reading this... <br /> I probably miss you too."
                </p>
                <p className="mt-6 text-rose-400 text-sm uppercase tracking-widest">I love you so much</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Star Map Moment */}
      <section className="h-screen relative flex items-center justify-center text-center px-6 overflow-hidden">
        <StarrySky />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="relative z-10 space-y-6"
        >
          <p className="text-white/60 font-serif italic text-xl">"The universe looked like this on a special day."</p>
          <h2 className="text-3xl md:text-5xl font-display text-white">This is the sky on the day our story began.</h2>
          <div className="w-24 h-px bg-white/20 mx-auto" />
          <p className="text-rose-300/50 text-xs uppercase tracking-[0.4em]">Written in the stars</p>
        </motion.div>
      </section>

      {/* Love Letter */}
      <section className="py-32 px-6">
        <LoveLetter />
      </section>

      {/* Final Moment */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="space-y-8 relative z-10"
        >
          <h1 className="text-6xl md:text-9xl font-display text-white text-glow">I Love You ❤️</h1>
          <p className="text-xl md:text-2xl text-white/60 font-serif italic">
            And this is only the beginning of our story.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white/80 transition-all mx-auto"
          >
            <RefreshCw size={18} />
            <span>Replay Our Love Story</span>
          </motion.button>
        </motion.div>
      </section>

      <footer className="py-12 text-center text-white/20 text-[10px] uppercase tracking-[0.5em]">
        Made with love for my special someone • 2026
      </footer>
    </div>
  );
}
