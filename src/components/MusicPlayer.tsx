import React, { useState, useRef } from 'react';
import { Music, Pause, Play } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full flex items-center gap-3 shadow-xl">
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center text-white hover:bg-rose-600 transition-colors"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
        </button>
        <div className="hidden sm:block pr-4">
          <p className="text-xs font-medium text-white/80 uppercase tracking-widest">Our Song 🎵</p>
          <p className="text-[10px] text-white/50">Soft Romantic Instrumental</p>
        </div>
        <audio
          ref={audioRef}
          loop
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Placeholder romantic-ish track
        />
      </div>
    </div>
  );
};
