import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './Navbar';

const Hero = () => {
  const { isDark } = useTheme();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        o: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(167,139,250,${p.o})`
          : `rgba(99,102,241,${p.o * 0.5})`;
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, [isDark]);

  const t = {
    bg: isDark ? '#080c14' : '#f8fafc',
    gridColor: isDark ? 'rgba(167,139,250,0.025)' : 'rgba(99,102,241,0.04)',
    glow1: isDark ? 'rgba(99,102,241,0.12)' : 'rgba(99,102,241,0.07)',
    glow2: isDark ? 'rgba(167,139,250,0.10)' : 'rgba(167,139,250,0.06)',
    glow3: isDark ? 'rgba(52,211,153,0.04)' : 'rgba(52,211,153,0.05)',
    badgeColor: '#a78bfa',
    badgeBg: isDark ? 'rgba(139,92,246,0.1)' : 'rgba(139,92,246,0.08)',
    badgeBorder: isDark ? 'rgba(139,92,246,0.22)' : 'rgba(139,92,246,0.25)',
    titleColor: isDark ? '#fff' : '#0f172a',
    roleColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(15,23,42,0.35)',
    descColor: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(15,23,42,0.55)',
    descStrong: isDark ? 'rgba(255,255,255,0.75)' : '#0f172a',
    btnSecBg: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(15,23,42,0.05)',
    btnSecBorder: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(15,23,42,0.15)',
    btnSecColor: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(15,23,42,0.7)',
    statsBg: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(15,23,42,0.03)',
    statsBorder: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(15,23,42,0.08)',
    statDivider: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(15,23,42,0.06)',
    statLbl: isDark ? 'rgba(255,255,255,0.25)' : 'rgba(15,23,42,0.4)',
    scrollText: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(15,23,42,0.2)',
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          padding: 0 24px;
          transition: background 0.4s ease;
        }

        .hero-canvas {
          position: absolute; inset: 0;
          z-index: 0; pointer-events: none;
        }

        .hero-glow-1 {
          position: absolute;
          top: 15%; left: 20%;
          width: 500px; height: 500px;
          filter: blur(40px);
          pointer-events: none;
          animation: floatA 8s ease-in-out infinite;
          transition: background 0.4s;
        }

        .hero-glow-2 {
          position: absolute;
          bottom: 20%; right: 15%;
          width: 450px; height: 450px;
          filter: blur(40px);
          pointer-events: none;
          animation: floatB 10s ease-in-out infinite;
          transition: background 0.4s;
        }

        .hero-glow-3 {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 700px; height: 300px;
          pointer-events: none;
          transition: background 0.4s;
        }

        @keyframes floatA {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }

        @keyframes floatB {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-25px, 20px); }
        }

        .grid-bg {
          position: absolute; inset: 0;
          background-size: 70px 70px;
          pointer-events: none;
          z-index: 0;
          transition: background-image 0.4s;
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          max-width: 900px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          padding: 7px 18px;
          border-radius: 100px;
          margin-bottom: 32px;
          transition: all 0.3s;
        }

        .hero-badge::before {
          content: '';
          width: 6px; height: 6px;
          background: #a78bfa;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }

        .hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(56px, 9vw, 110px);
          font-weight: 800;
          line-height: 0.92;
          letter-spacing: -4px;
          margin-bottom: 12px;
          transition: color 0.3s;
        }

        .hero-title .name {
          display: block;
          background: linear-gradient(135deg, #818cf8 0%, #a78bfa 40%, #ec4899 80%, #f97316 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200%;
          animation: shimmer 4s linear infinite;
        }

        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        .hero-role {
          font-family: 'Syne', sans-serif;
          font-size: clamp(18px, 2.5vw, 26px);
          font-weight: 700;
          letter-spacing: -0.5px;
          margin-bottom: 28px;
          transition: color 0.3s;
        }

        .hero-role span { color: rgba(52,211,153,0.7); }

        .hero-desc {
          font-size: clamp(14px, 1.6vw, 17px);
          line-height: 1.8;
          max-width: 580px;
          margin-bottom: 48px;
          font-weight: 300;
          transition: color 0.3s;
        }

        .hero-btns {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 64px;
        }

        .btn-primary {
          display: flex; align-items: center; gap: 8px;
          padding: 14px 28px;
          background: linear-gradient(135deg, #6366f1, #a78bfa);
          border: none; border-radius: 14px;
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-size: 14px; font-weight: 700;
          cursor: pointer;
          box-shadow: 0 8px 32px rgba(99,102,241,0.35);
          letter-spacing: 0.3px;
        }

        .btn-secondary {
          display: flex; align-items: center; gap: 8px;
          padding: 14px 28px;
          border-radius: 14px;
          font-family: 'Syne', sans-serif;
          font-size: 14px; font-weight: 700;
          cursor: pointer;
          backdrop-filter: blur(10px);
          letter-spacing: 0.3px;
          transition: all 0.3s;
        }

        .hero-stats {
          display: flex;
          border-radius: 20px;
          overflow: hidden;
          backdrop-filter: blur(16px);
          transition: all 0.3s;
        }

        .hero-stat {
          padding: 20px 36px;
          text-align: center;
          position: relative;
          transition: background 0.2s;
        }

        .stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 28px; font-weight: 800;
          background: linear-gradient(135deg, #a78bfa, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1; margin-bottom: 4px;
        }

        .stat-lbl {
          font-size: 11px;
          letter-spacing: 0.5px;
          white-space: nowrap;
          transition: color 0.3s;
        }

        .scroll-hint {
          position: absolute;
          bottom: 36px; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column;
          align-items: center; gap: 6px;
          z-index: 2;
        }

        .scroll-text {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          transition: color 0.3s;
        }

        .scroll-line {
          width: 1px; height: 40px;
          background: linear-gradient(to bottom, rgba(167,139,250,0.4), transparent);
          animation: scrollDown 2s ease-in-out infinite;
        }

        @keyframes scrollDown {
          0% { transform: scaleY(0); transform-origin: top; opacity: 1; }
          50% { transform: scaleY(1); transform-origin: top; opacity: 1; }
          100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
        }
      `}</style>

      <section
        className="hero-section"
        style={{ background: t.bg }}
      >
        <canvas ref={canvasRef} className="hero-canvas" />

        <div
          className="grid-bg"
          style={{
            backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`
          }}
        />

        <div className="hero-glow-1" style={{ background: `radial-gradient(circle, ${t.glow1} 0%, transparent 65%)` }} />
        <div className="hero-glow-2" style={{ background: `radial-gradient(circle, ${t.glow2} 0%, transparent 65%)` }} />
        <div className="hero-glow-3" style={{ background: `radial-gradient(ellipse, ${t.glow3} 0%, transparent 65%)` }} />

        <motion.div
          className="hero-inner"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="hero-badge"
            style={{ color: t.badgeColor, background: t.badgeBg, border: `1px solid ${t.badgeBorder}` }}
          >
            Portfolio 2026
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="hero-title"
            style={{ color: t.titleColor }}
          >
            Hi, I'm
            <span className="name">Akram.</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={fadeUp}
            className="hero-role"
            style={{ color: t.roleColor }}
          >
            Frontend Developer <span>&</span> UI Craftsman
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="hero-desc"
            style={{ color: t.descColor }}
          >
            I bridge the gap between{' '}
            <strong style={{ color: t.descStrong }}>clean code</strong> and{' '}
            <strong style={{ color: t.descStrong }}>compelling visual design</strong>{' '}
            — building modern, scalable web applications that capture attention and drive engagement.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="hero-btns">
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 12px 40px rgba(99,102,241,0.5)' }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            >
              View Projects →
            </motion.button>
            <motion.button
              className="btn-secondary"
              style={{
                background: t.btnSecBg,
                border: `1px solid ${t.btnSecBorder}`,
                color: t.btnSecColor,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            >
              Let's Connect ↗
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="hero-stats"
            style={{
              background: t.statsBg,
              border: `1px solid ${t.statsBorder}`,
            }}
          >
            {[
              { num: '2+', lbl: 'Years Exp.' },
              { num: '20+', lbl: 'Projects' },
              { num: '8+', lbl: 'Technologies' },
              { num: '100%', lbl: 'Passion' },
            ].map((s, i, arr) => (
              <motion.div
                key={i}
                className="hero-stat"
                style={{
                  borderRight: i < arr.length - 1 ? `1px solid ${t.statDivider}` : 'none'
                }}
                whileHover={{ background: isDark ? 'rgba(167,139,250,0.06)' : 'rgba(99,102,241,0.05)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="stat-num">{s.num}</div>
                <div className="stat-lbl" style={{ color: t.statLbl }}>{s.lbl}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <div className="scroll-hint">
          <span className="scroll-text" style={{ color: t.scrollText }}>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>
    </>
  );
};

export default Hero;