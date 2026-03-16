import React, { useEffect, useRef } from 'react';

export const HeartParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let hearts: Heart[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Heart {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      angle: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 100;
        this.size = Math.random() * 15 + 5;
        this.speed = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.angle = Math.random() * Math.PI * 2;
      }

      update() {
        this.y -= this.speed;
        this.x += Math.sin(this.angle) * 0.5;
        this.angle += 0.02;
        if (this.y < -100) {
          this.y = canvas.height + 100;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-this.size / 2, -this.size / 2, -this.size, this.size / 3, 0, this.size);
        ctx.bezierCurveTo(this.size, this.size / 3, this.size / 2, -this.size / 2, 0, 0);
        ctx.fillStyle = `rgba(255, 111, 165, ${this.opacity})`;
        ctx.fill();
        ctx.restore();
      }
    }

    const init = () => {
      hearts = Array.from({ length: 30 }, () => new Heart());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hearts.forEach((heart) => {
        heart.update();
        heart.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};
