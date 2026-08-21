import React, { useEffect, useRef } from 'react';

export default function WindCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Wind particle system
    const numStreaks = 24;
    const colors = [
      'rgba(43, 92, 230, 0.4)',
      'rgba(30, 134, 219, 0.35)',
      'rgba(22, 181, 208, 0.3)',
      'rgba(77, 123, 255, 0.25)'
    ];

    const streaks = Array.from({ length: numStreaks }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: 80 + Math.random() * 220,
      speed: 1.5 + Math.random() * 2.8,
      thickness: 1.2 + Math.random() * 1.8,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 0.15 + Math.random() * 0.45
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      streaks.forEach((streak) => {
        streak.x += streak.speed;
        if (streak.x - streak.length > width) {
          streak.x = -streak.length;
          streak.y = Math.random() * height;
        }

        const gradient = ctx.createLinearGradient(
          streak.x - streak.length,
          streak.y,
          streak.x,
          streak.y
        );
        gradient.addColorStop(0, 'rgba(43, 92, 230, 0)');
        gradient.addColorStop(0.7, streak.color);
        gradient.addColorStop(1, 'rgba(22, 181, 208, 0.8)');

        ctx.beginPath();
        ctx.moveTo(streak.x - streak.length, streak.y);
        ctx.lineTo(streak.x, streak.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = streak.thickness;
        ctx.lineCap = 'round';
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}
