import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export const HeartCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out hidden md:block"
      style={{
        left: position.x,
        top: position.y,
        transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
      }}
    >
      <Heart className="text-rose-400 fill-rose-400 w-6 h-6 drop-shadow-[0_0_8px_rgba(255,111,165,0.8)]" />
    </div>
  );
};
