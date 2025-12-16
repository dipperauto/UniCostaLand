"use client";

import React from "react";
import { cn } from "../lib/utils";

type Props = {
  className?: string;
};

type Particle = {
  ox: number; // posição de descanso
  oy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  phase: number;
};

const InteractiveDollarField: React.FC<Props> = ({ className }) => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const particlesRef = React.useRef<Particle[]>([]);
  const rafRef = React.useRef<number | null>(null);
  const ctxRef = React.useRef<CanvasRenderingContext2D | null>(null);
  const dprRef = React.useRef<number>(1);
  const mouseRef = React.useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  const setup = React.useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    dprRef.current = dpr;
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Gerar partículas em uma grade sutil
    const spacing = Math.max(26, Math.min(42, Math.floor(rect.width / 24)));
    const cols = Math.ceil(rect.width / spacing) + 2;
    const rows = Math.ceil(rect.height / spacing) + 2;

    const marginX = (rect.width - (cols - 1) * spacing) / 2;
    const marginY = (rect.height - (rows - 1) * spacing) / 2;

    const arr: Particle[] = [];
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        const ox = marginX + i * spacing;
        const oy = marginY + j * spacing;
        const size = 10 + ((i + j) % 3); // leves variações 10-12px
        arr.push({
          ox,
          oy,
          x: ox + (Math.random() - 0.5) * 4,
          y: oy + (Math.random() - 0.5) * 4,
          vx: 0,
          vy: 0,
          size,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }
    particlesRef.current = arr;
  }, []);

  const draw = React.useCallback((t: number) => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    const { width, height } = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, width, height);

    const mouse = mouseRef.current;

    // parâmetros de física suaves
    const spring = 0.02;
    const damping = 0.9;
    const influenceRadius = Math.min(width, height) * 0.28;
    const repelStrength = 900; // quanto repele o mouse

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (const p of particlesRef.current) {
      // Força de retorno para posição de descanso
      const ax = (p.ox - p.x) * spring;
      const ay = (p.oy - p.y) * spring;

      // Repulsão do mouse
      if (mouse.active) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < influenceRadius * influenceRadius) {
          const dist = Math.sqrt(dist2) + 0.0001;
          const force = repelStrength / (dist2 + 100); // suaviza no centro
          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;
          p.vx += fx;
          p.vy += fy;
        }
      }

      // Ondulação sutil para sensação de "mar"
      const wave = Math.sin(p.phase + t * 0.0016) * 0.15;
      p.vx += ax + wave * 0.2;
      p.vy += ay + wave * 0.1;

      // Atualiza velocidade/posição
      p.vx *= damping;
      p.vy *= damping;
      p.x += p.vx;
      p.y += p.vy;

      // Desenho
      const shimmer = 0.12 + 0.08 * Math.sin(p.phase + t * 0.002);
      ctx.fillStyle = `rgba(125, 211, 252, ${shimmer})`; // sky-300 em alpha
      ctx.font = `${p.size}px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial`;
      ctx.fillText("$", p.x, p.y);
    }
  }, []);

  const loop = React.useCallback((t: number) => {
    draw(t);
    rafRef.current = requestAnimationFrame(loop);
  }, [draw]);

  React.useEffect(() => {
    setup();
    rafRef.current = requestAnimationFrame(loop);

    const onResize = () => {
      setup();
    };
    const onMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };
    const onLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [loop, setup]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("block w-full h-full pointer-events-none", className)}
    />
  );
};

export default InteractiveDollarField;