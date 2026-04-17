import { useEffect, useRef } from "react";

interface TrailPoint {
  x: number;
  y: number;
  life: number; // 1 → 0
  size: number;
}

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<TrailPoint[]>([]);
  const targetRef = useRef({ x: -1000, y: -1000 });
  const followerRef = useRef({ x: -1000, y: -1000 });
  const activeRef = useRef(false);
  const rafRef = useRef<number>();

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      if (!activeRef.current) {
        followerRef.current.x = e.clientX;
        followerRef.current.y = e.clientY;
        activeRef.current = true;
      }
    };
    window.addEventListener("mousemove", handleMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (activeRef.current) {
        // Smooth follower easing toward the target
        followerRef.current.x += (targetRef.current.x - followerRef.current.x) * 0.18;
        followerRef.current.y += (targetRef.current.y - followerRef.current.y) * 0.18;

        // Drop a new trail point each frame at the follower position
        pointsRef.current.push({
          x: followerRef.current.x,
          y: followerRef.current.y,
          life: 1,
          size: 6,
        });
        if (pointsRef.current.length > 60) pointsRef.current.shift();
      }

      ctx.globalCompositeOperation = "lighter";

      // Draw soft trail dots — newer points are larger & brighter
      const pts = pointsRef.current;
      for (let i = pts.length - 1; i >= 0; i--) {
        const p = pts[i];
        p.life -= 0.035;
        if (p.life <= 0) {
          pts.splice(i, 1);
          continue;
        }
        const radius = p.size * p.life * 2.2;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
        grad.addColorStop(0, `rgba(255, 255, 255, ${0.35 * p.life})`);
        grad.addColorStop(0.4, `rgba(255, 255, 255, ${0.12 * p.life})`);
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Elegant cursor halo
      if (activeRef.current) {
        const { x, y } = followerRef.current;
        const halo = ctx.createRadialGradient(x, y, 0, x, y, 28);
        halo.addColorStop(0, "rgba(255, 255, 255, 0.55)");
        halo.addColorStop(0.5, "rgba(255, 255, 255, 0.15)");
        halo.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(x, y, 28, 0, Math.PI * 2);
        ctx.fill();

        // Crisp inner dot
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.beginPath();
        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
      rafRef.current = requestAnimationFrame(render);
    };
    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-[9999] pointer-events-none"
    />
  );
};

export default CursorTrail;
