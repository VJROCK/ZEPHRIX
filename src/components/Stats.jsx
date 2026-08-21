import React, { useState, useEffect, useRef } from 'react';
import { COMPANY_INFO } from '../data/websiteData';

function AnimatedCounter({ endValue, suffix, duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    const isFloat = endValue % 1 !== 0;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = isFloat
        ? parseFloat((easeProgress * endValue).toFixed(1))
        : Math.floor(easeProgress * endValue);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(step);
  }, [hasStarted, endValue, duration]);

  return (
    <span ref={elementRef} className="stat-num">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="stats-section" aria-label="Key Performance Indicators">
      <div className="wrap">
        <div className="stats-grid">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <AnimatedCounter endValue={stat.value} suffix={stat.suffix} />
              <div className="stat-label">{stat.label}</div>
              <div className="stat-desc">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
