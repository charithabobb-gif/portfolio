import React, { useEffect, useRef } from 'react';

export default function BackgroundCanvas({ theme = 'cyberpunk' }) {
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

    // Node count adjusted by screen width
    const nodeCount = Math.min(Math.floor(width / 24), 50);
    const nodes = [];

    // Theme color configuration for canvas particles and links
    let nodeColor, altNodeColor, lineRgb;

    if (theme === 'corporate') {
      nodeColor = 'rgba(37, 99, 235, 0.65)'; // Royal Blue
      altNodeColor = 'rgba(2, 132, 199, 0.65)'; // Sky Blue
      lineRgb = '37, 99, 235';
    } else if (theme === 'nature') {
      nodeColor = 'rgba(16, 185, 129, 0.75)'; // Emerald
      altNodeColor = 'rgba(52, 211, 153, 0.75)'; // Mint
      lineRgb = '16, 185, 129';
    } else if (theme === 'sunset') {
      nodeColor = 'rgba(244, 63, 94, 0.75)'; // Rose
      altNodeColor = 'rgba(245, 158, 11, 0.75)'; // Amber
      lineRgb = '244, 63, 94';
    } else {
      // Default: Cyberpunk AI
      nodeColor = 'rgba(168, 85, 247, 0.75)'; // Neon Purple
      altNodeColor = 'rgba(6, 182, 212, 0.75)'; // Neon Cyan
      lineRgb = '168, 85, 247';
    }

    const isLight = theme === 'corporate';

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.65,
        vy: (Math.random() - 0.5) * 0.65,
        radius: Math.random() * 2 + 1.2,
        isAlt: Math.random() > 0.5,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connection lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 135) {
            const alpha = (1 - dist / 135) * (isLight ? 0.16 : 0.24);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${lineRgb}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.isAlt ? altNodeColor : nodeColor;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div 
      className="absolute inset-0 pointer-events-none overflow-hidden z-0" 
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
