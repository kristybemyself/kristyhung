import { useEffect, useRef, useState } from "react";

const CursorTrail = () => {
  const innerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    const animate = () => {
      const target = posRef.current;
      const ring = ringPosRef.current;

      ring.x += (target.x - ring.x) * 0.12;
      ring.y += (target.y - ring.y) * 0.12;

      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${target.x}px, ${target.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.body.addEventListener("mouseleave", onLeave);
    document.body.addEventListener("mouseenter", onEnter);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseleave", onLeave);
      document.body.removeEventListener("mouseenter", onEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[9999] pointer-events-none hidden md:block"
      style={{ mixBlendMode: "difference" }}
    >
      <div
        ref={innerRef}
        className="absolute top-0 left-0 rounded-full bg-white will-change-transform"
        style={{
          width: 8,
          height: 8,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.15s ease",
        }}
      />
      <div
        ref={ringRef}
        className="absolute top-0 left-0 rounded-full border border-white will-change-transform"
        style={{
          width: 32,
          height: 32,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.15s ease",
        }}
      />
    </div>
  );
};

export default CursorTrail;
