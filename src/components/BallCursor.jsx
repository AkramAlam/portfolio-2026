import { useEffect, useRef } from "react";
import { useTheme } from "./Navbar";

export default function BallCursor() {
  const { isDark } = useTheme();
  const ballRef = useRef(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const ball = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const velocity = useRef({ x: 0, y: 0 });
  const tail = useRef([]);
  const animRef = useRef(null);
  const hiddenRef = useRef(false);
  const isDarkRef = useRef(isDark);

  // Sync isDark to ref so canvas loop can read it
  useEffect(() => {
    isDarkRef.current = isDark;
  }, [isDark]);

  const TAIL_LENGTH = 32;
  const BALL_RADIUS = 16;

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      hiddenRef.current = false;
    };
    const onLeave = () => { hiddenRef.current = true; };
    const onEnter = () => { hiddenRef.current = false; };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    tail.current = Array.from({ length: TAIL_LENGTH }, () => ({
      x: ball.current.x,
      y: ball.current.y,
    }));

    const canvas = ballRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const lerp = (a, b, t) => a + (b - a) * t;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const dark = isDarkRef.current;

      if (!hiddenRef.current) {
        const prevX = ball.current.x;
        const prevY = ball.current.y;

        ball.current.x = lerp(ball.current.x, mouse.current.x, 0.12);
        ball.current.y = lerp(ball.current.y, mouse.current.y, 0.12);

        velocity.current.x = ball.current.x - prevX;
        velocity.current.y = ball.current.y - prevY;

        const speed = Math.sqrt(velocity.current.x ** 2 + velocity.current.y ** 2);

        tail.current.unshift({ x: ball.current.x, y: ball.current.y });
        if (tail.current.length > TAIL_LENGTH) tail.current.pop();

        // ---- TAIL ----
        for (let i = tail.current.length - 1; i >= 1; i--) {
          const t = i / tail.current.length;
          const r = Math.max(1.5, BALL_RADIUS * (1 - t * 0.88));
          const alpha = (1 - t) * 0.18;
          const progress = 1 - t;

          ctx.save();
          ctx.beginPath();
          ctx.arc(tail.current[i].x, tail.current[i].y, r, 0, Math.PI * 2);

          if (dark) {
            // White glass tail
            ctx.fillStyle = `rgba(255,255,255,${alpha})`;
            ctx.fill();
            ctx.strokeStyle = `rgba(255,255,255,${(1 - t) * 0.3})`;
          } else {
            // Purple colored tail
            const hue = 260 + progress * 60;
            ctx.fillStyle = `hsla(${hue}, 80%, 65%, ${(1 - t) * 0.55})`;
            ctx.fill();
            ctx.strokeStyle = `hsla(${hue}, 80%, 65%, ${(1 - t) * 0.4})`;
          }

          ctx.lineWidth = 0.8;
          ctx.stroke();
          ctx.restore();
        }

        // ---- MAIN BALL ----
        const angle = Math.atan2(velocity.current.y, velocity.current.x);
        const stretch = Math.min(speed * 0.32, 11);
        const scaleX = 1 + stretch / BALL_RADIUS;
        const scaleY = Math.max(0.6, 1 - stretch / (BALL_RADIUS * 2.2));

        ctx.save();
        ctx.translate(ball.current.x, ball.current.y);
        ctx.rotate(angle);
        ctx.scale(scaleX, scaleY);

        if (dark) {
          // ---- WHITE GLASS (dark mode) ----

          // Outer glow
          const outerGlow = ctx.createRadialGradient(0, 0, BALL_RADIUS * 0.6, 0, 0, BALL_RADIUS * 2.8);
          outerGlow.addColorStop(0, "rgba(255,255,255,0.08)");
          outerGlow.addColorStop(0.5, "rgba(255,255,255,0.04)");
          outerGlow.addColorStop(1, "rgba(255,255,255,0)");
          ctx.beginPath();
          ctx.arc(0, 0, BALL_RADIUS * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = outerGlow;
          ctx.fill();

          // Glass body
          const bodyGrad = ctx.createRadialGradient(
            -BALL_RADIUS * 0.3, -BALL_RADIUS * 0.3, BALL_RADIUS * 0.1,
            0, 0, BALL_RADIUS
          );
          bodyGrad.addColorStop(0, "rgba(255,255,255,0.55)");
          bodyGrad.addColorStop(0.4, "rgba(255,255,255,0.18)");
          bodyGrad.addColorStop(1, "rgba(255,255,255,0.06)");
          ctx.beginPath();
          ctx.arc(0, 0, BALL_RADIUS, 0, Math.PI * 2);
          ctx.fillStyle = bodyGrad;
          ctx.shadowColor = "rgba(255,255,255,0.6)";
          ctx.shadowBlur = 20;
          ctx.fill();

          // Rim
          ctx.beginPath();
          ctx.arc(0, 0, BALL_RADIUS, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(255,255,255,0.55)";
          ctx.lineWidth = 1.2;
          ctx.shadowColor = "rgba(255,255,255,0.9)";
          ctx.shadowBlur = 8;
          ctx.stroke();

          // Main shine
          ctx.shadowBlur = 0;
          const shine1 = ctx.createRadialGradient(
            -BALL_RADIUS * 0.38, -BALL_RADIUS * 0.42, 0,
            -BALL_RADIUS * 0.3, -BALL_RADIUS * 0.35, BALL_RADIUS * 0.42
          );
          shine1.addColorStop(0, "rgba(255,255,255,0.92)");
          shine1.addColorStop(0.5, "rgba(255,255,255,0.35)");
          shine1.addColorStop(1, "rgba(255,255,255,0)");
          ctx.beginPath();
          ctx.arc(-BALL_RADIUS * 0.3, -BALL_RADIUS * 0.35, BALL_RADIUS * 0.42, 0, Math.PI * 2);
          ctx.fillStyle = shine1;
          ctx.fill();

          // Secondary reflection
          const shine2 = ctx.createRadialGradient(
            BALL_RADIUS * 0.3, BALL_RADIUS * 0.35, 0,
            BALL_RADIUS * 0.3, BALL_RADIUS * 0.35, BALL_RADIUS * 0.28
          );
          shine2.addColorStop(0, "rgba(255,255,255,0.2)");
          shine2.addColorStop(1, "rgba(255,255,255,0)");
          ctx.beginPath();
          ctx.arc(BALL_RADIUS * 0.3, BALL_RADIUS * 0.35, BALL_RADIUS * 0.28, 0, Math.PI * 2);
          ctx.fillStyle = shine2;
          ctx.fill();

          // Specular dot
          ctx.beginPath();
          ctx.arc(-BALL_RADIUS * 0.28, -BALL_RADIUS * 0.38, BALL_RADIUS * 0.1, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255,255,255,0.95)";
          ctx.fill();

        } else {
          // ---- PURPLE COLORED BALL (light mode) ----

          // Outer glow
          const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, BALL_RADIUS * 2.5);
          glow.addColorStop(0, "rgba(167,139,250,0.25)");
          glow.addColorStop(1, "rgba(167,139,250,0)");
          ctx.beginPath();
          ctx.arc(0, 0, BALL_RADIUS * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();

          // Ball gradient
          const grad = ctx.createRadialGradient(-3, -3, 1, 0, 0, BALL_RADIUS);
          grad.addColorStop(0, "#c4b5fd");
          grad.addColorStop(0.5, "#a78bfa");
          grad.addColorStop(1, "#7c3aed");
          ctx.beginPath();
          ctx.arc(0, 0, BALL_RADIUS, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.shadowColor = "rgba(167,139,250,0.8)";
          ctx.shadowBlur = 18;
          ctx.fill();

          // Shine
          ctx.beginPath();
          ctx.arc(-4, -4, BALL_RADIUS * 0.3, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255,255,255,0.45)";
          ctx.shadowBlur = 0;
          ctx.fill();
        }

        ctx.restore();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <>
      <style>{`
        * { cursor: none !important; }
        canvas.ball-cursor {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          pointer-events: none;
          z-index: 99999;
        }
      `}</style>
      <canvas ref={ballRef} className="ball-cursor" />
    </>
  );
}