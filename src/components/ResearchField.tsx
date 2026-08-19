import { useEffect, useRef } from 'react';

type Point = {
  x: number;
  y: number;
  group: number;
  phase: number;
};

const palette = ['#ef5b42', '#176b63', '#315fe8', '#d7a921'];

const ResearchField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const pointer = { x: 0.72, y: 0.36 };
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    let width = 0;
    let height = 0;
    let points: Point[] = [];

    const makePoints = () => {
      points = Array.from({ length: width < 720 ? 28 : 52 }, (_, index) => {
        const group = index % 4;
        const angle = index * 2.399;
        const radius = 48 + ((index * 37) % Math.max(70, Math.min(width, height) * 0.24));
        const centerX = width * (group < 2 ? 0.78 : 0.9);
        const centerY = height * (group % 2 === 0 ? 0.28 : 0.66);

        return {
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius * 0.72,
          group,
          phase: index * 0.47,
        };
      });
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      makePoints();
    };

    const drawContour = (
      centerX: number,
      centerY: number,
      radius: number,
      color: string,
      time: number,
      offset: number,
    ) => {
      context.beginPath();
      for (let step = 0; step <= 80; step += 1) {
        const angle = (step / 80) * Math.PI * 2;
        const noise =
          Math.sin(angle * 3 + time * 0.0005 + offset) * 0.09 +
          Math.cos(angle * 5 - time * 0.00035) * 0.05;
        const localRadius = radius * (1 + noise);
        const x = centerX + Math.cos(angle) * localRadius;
        const y = centerY + Math.sin(angle) * localRadius * 0.82;
        if (step === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      }
      context.closePath();
      context.strokeStyle = color;
      context.lineWidth = 1.5;
      context.globalAlpha = 0.34;
      context.stroke();
      context.globalAlpha = 1;
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);

      context.strokeStyle = '#121513';
      context.globalAlpha = 0.045;
      context.lineWidth = 1;
      const grid = width < 720 ? 48 : 72;
      for (let x = 0; x < width; x += grid) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }
      for (let y = 0; y < height; y += grid) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }
      context.globalAlpha = 1;

      const pointerX = pointer.x * width;
      const pointerY = pointer.y * height;

      points.forEach((point, index) => {
        const motion = reducedMotion ? 0 : Math.sin(time * 0.00055 + point.phase) * 5;
        const pointX = point.x + motion;
        const pointY = point.y + Math.cos(time * 0.0004 + point.phase) * 4;

        const next = points[(index + 7) % points.length];
        if (next.group === point.group) {
          context.beginPath();
          context.moveTo(pointX, pointY);
          context.lineTo(next.x, next.y);
          context.strokeStyle = palette[point.group];
          context.globalAlpha = 0.09;
          context.lineWidth = 1;
          context.stroke();
        }

        const pointerDistance = Math.hypot(pointX - pointerX, pointY - pointerY);
        const radius = pointerDistance < 150 ? 4.5 : 2.5;
        context.beginPath();
        context.arc(pointX, pointY, radius, 0, Math.PI * 2);
        context.fillStyle = palette[point.group];
        context.globalAlpha = pointerDistance < 150 ? 0.88 : 0.45;
        context.fill();
      });
      context.globalAlpha = 1;

      drawContour(width * 0.79, height * 0.49, Math.min(width, height) * 0.2, palette[0], time, 0);
      drawContour(width * 0.79, height * 0.49, Math.min(width, height) * 0.15, palette[2], time, 1.8);
      drawContour(width * 0.79, height * 0.49, Math.min(width, height) * 0.1, palette[1], time, 3.2);

      if (!reducedMotion) frame = window.requestAnimationFrame(draw);
    };

    const handlePointer = (event: PointerEvent) => {
      pointer.x = event.clientX / window.innerWidth;
      pointer.y = event.clientY / window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handlePointer, { passive: true });
    draw(0);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="research-field" aria-hidden="true" />;
};

export default ResearchField;
