"use client";

import React from "react";

type Drop = {
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
};

const generateDrops = (count = 28): Drop[] => {
  const rng = (min: number, max: number) => Math.random() * (max - min) + min;
  return Array.from({ length: count }).map(() => ({
    left: rng(0, 100),
    delay: rng(0, 10),
    duration: rng(14, 26),
    size: rng(10, 20),
    opacity: rng(0.06, 0.12),
  }));
};

const BackgroundRain: React.FC = () => {
  const [drops] = React.useState<Drop[]>(() => generateDrops(34));

  return (
    <div className="money-rain-container pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {drops.map((d, i) => (
        <span
          key={i}
          className="money-drop select-none"
          style={{
            left: `${d.left}%`,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
            fontSize: `${d.size}px`,
            opacity: d.opacity,
          }}
        >
          $
        </span>
      ))}
    </div>
  );
};

export default BackgroundRain;