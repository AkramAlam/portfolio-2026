import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./Navbar";

const projects = [
  {
    id: 1,
    title: "Brand Ad & Media Dashboard",
    description: "A React-based dashboard built for a brand to manage and preview social media advertising content, including video and image campaigns.",
    tags: ["React", "Tailwind v4", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
    accent: "#6366f1",
  },
  {
    id: 2,
    title: "Modern E-Commerce Store",
    description: "A sleek, high-performance storefront with a dark-mode first design, featuring complex state management and a seamless checkout UI.",
    tags: ["React", "Redux", "CSS Grid"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    accent: "#3b82f6",
  },
  {
    id: 3,
    title: "Interactive Analytics Platform",
    description: "A data visualization platform translating complex datasets into beautiful, interactive charts and responsive layouts.",
    tags: ["React", "Chart.js", "Tailwind"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    accent: "#a78bfa",
  },
  {
    id: 4,
    title: "SaaS Onboarding Flow",
    description: "A guided multi-step onboarding experience with animated transitions, progress tracking, and personalized setup wizards.",
    tags: ["Next.js", "Framer Motion", "Zustand"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    accent: "#a78bfa",
  },
  {
    id: 5,
    title: "Real-Time Chat App",
    description: "A fully responsive messaging platform with real-time updates, typing indicators, emoji reactions, and rich media support.",
    tags: ["React", "Socket.io", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&q=80",
    accent: "#34d399",
  },
  {
    id: 6,
    title: "Portfolio Builder Tool",
    description: "A drag-and-drop portfolio creation platform with live preview, custom themes, and one-click publishing to the web.",
    tags: ["React", "DnD Kit", "Styled Components"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=80",
    accent: "#f97316",
  },
];

const VISIBLE = 3;

export default function Projects() {
  const { isDark } = useTheme();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const maxIndex = projects.length - VISIBLE;

  const paginate = (dir) => {
    const next = index + dir;
    if (next < 0 || next > maxIndex) return;
    setDirection(dir);
    setIndex(next);
  };

  const t = {
    bg: isDark ? '#0b1120' : '#f1f5f9',
    glow1: isDark ? 'rgba(59,130,246,0.07)' : 'rgba(59,130,246,0.05)',
    glow2: isDark ? 'rgba(167,139,250,0.05)' : 'rgba(167,139,250,0.04)',
    titleColor: isDark ? '#fff' : '#0f172a',
    counterColor: isDark ? 'rgba(255,255,255,0.35)' : 'rgba(15,23,42,0.4)',
    navBtnBg: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(15,23,42,0.04)',
    navBtnBorder: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(15,23,42,0.12)',
    navBtnColor: isDark ? '#fff' : '#0f172a',
    cardBg: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.9)',
    cardBorder: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(15,23,42,0.08)',
    cardOverlay: isDark ? 'rgba(11,17,32,0.9)' : 'rgba(241,245,249,0.9)',
    cardDesc: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(15,23,42,0.55)',
    tagBg: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(15,23,42,0.05)',
    tagBorder: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(15,23,42,0.1)',
    tagColor: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(15,23,42,0.6)',
    linkColor: isDark ? 'rgba(255,255,255,0.75)' : 'rgba(15,23,42,0.7)',
    dotInactive: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(15,23,42,0.15)',
  };

  const cardW = `calc((100% - 48px) / 3)`;
  const offset = `calc(${index} * (-1 * (${cardW} + 24px)))`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .featured-root {
          min-height: 100vh;
          padding: 64px 56px 80px;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
          position: relative;
          transition: background 0.4s ease;
        }

        .feat-glow-1 {
          position: absolute;
          top: -200px; left: -200px;
          width: 700px; height: 700px;
          pointer-events: none;
          transition: background 0.4s;
        }

        .feat-glow-2 {
          position: absolute;
          bottom: -100px; right: -100px;
          width: 500px; height: 500px;
          pointer-events: none;
          transition: background 0.4s;
        }

        .section-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 52px;
          position: relative;
          z-index: 2;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: 52px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -1px;
          transition: color 0.3s;
        }

        .title-underline {
          margin-top: 10px;
          height: 3px;
          width: 72px;
          background: linear-gradient(90deg, #3b82f6, #60a5fa);
          border-radius: 2px;
        }

        .nav-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .nav-btn {
          width: 50px; height: 50px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          backdrop-filter: blur(8px);
          outline: none;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }

        .nav-btn:disabled { opacity: 0.2; cursor: not-allowed; }

        .slider-viewport {
          overflow: hidden;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        .slider-track { display: flex; gap: 24px; }

        .card {
          flex: 0 0 calc((100% - 48px) / 3);
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          transition: background 0.3s, border-color 0.3s;
        }

        .card-img-wrap {
          width: 100%; height: 220px;
          overflow: hidden; position: relative;
        }

        .card-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
          display: block;
        }

        .card:hover .card-img-wrap img { transform: scale(1.07); }

        .card-img-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 80px;
          transition: background 0.3s;
        }

        .card-body { padding: 24px 26px 28px; }

        .card-title {
          font-family: 'Syne', sans-serif;
          font-size: 20px; font-weight: 700;
          line-height: 1.3; margin-bottom: 12px;
        }

        .card-desc {
          font-size: 14px; line-height: 1.65;
          margin-bottom: 20px; font-weight: 300;
          transition: color 0.3s;
        }

        .card-tags {
          display: flex; flex-wrap: wrap;
          gap: 8px; margin-bottom: 22px;
        }

        .tag {
          font-size: 11.5px; font-weight: 500;
          border-radius: 20px;
          padding: 4px 12px;
          transition: all 0.2s;
        }

        .card-link {
          display: flex; align-items: center;
          gap: 8px; font-size: 14px; font-weight: 500;
          background: none; border: none;
          padding: 0; cursor: pointer;
          transition: color 0.2s;
        }

        .dots {
          display: flex; justify-content: center;
          gap: 8px; margin-top: 40px;
          position: relative; z-index: 2;
        }

        .dot {
          height: 6px; border-radius: 3px;
          border: none; padding: 0; cursor: pointer;
        }
      `}</style>

      <div
        className="featured-root"
        id="projects"
        style={{ background: t.bg }}
      >
        <div
          className="feat-glow-1"
          style={{ background: `radial-gradient(circle, ${t.glow1} 0%, transparent 70%)` }}
        />
        <div
          className="feat-glow-2"
          style={{ background: `radial-gradient(circle, ${t.glow2} 0%, transparent 70%)` }}
        />

        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <h2 className="section-title" style={{ color: t.titleColor }}>
              Featured
            </h2>
            <motion.div
              className="title-underline"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            />
          </div>

          <div className="nav-controls">
            <motion.button
              className="nav-btn"
              onClick={() => paginate(-1)}
              disabled={index === 0}
              style={{
                background: t.navBtnBg,
                border: `1.5px solid ${t.navBtnBorder}`,
                color: t.navBtnColor,
              }}
              whileHover={{ scale: index === 0 ? 1 : 1.1, backgroundColor: "rgba(59,130,246,0.18)", borderColor: "rgba(59,130,246,0.5)" }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              ←
            </motion.button>

            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                style={{ color: t.counterColor, fontFamily: 'Syne, sans-serif', fontSize: 13, letterSpacing: 1, minWidth: 48, textAlign: 'center' }}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
              >
                {index + 1} / {maxIndex + 1}
              </motion.span>
            </AnimatePresence>

            <motion.button
              className="nav-btn"
              onClick={() => paginate(1)}
              disabled={index >= maxIndex}
              style={{
                background: t.navBtnBg,
                border: `1.5px solid ${t.navBtnBorder}`,
                color: t.navBtnColor,
              }}
              whileHover={{ scale: index >= maxIndex ? 1 : 1.1, backgroundColor: "rgba(59,130,246,0.18)", borderColor: "rgba(59,130,246,0.5)" }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              →
            </motion.button>
          </div>
        </motion.div>

        {/* Slider */}
        <div className="slider-viewport">
          <motion.div
            className="slider-track"
            animate={{ x: offset }}
            transition={{ type: "spring", stiffness: 300, damping: 35, mass: 0.8 }}
          >
            {projects.map((project, i) => (
              <motion.div
                className="card"
                key={project.id}
                style={{
                  background: t.cardBg,
                  border: `1px solid ${t.cardBorder}`,
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (i % VISIBLE) * 0.1, ease: "easeOut" }}
                whileHover={{
                  y: -8,
                  borderColor: "rgba(59,130,246,0.35)",
                  boxShadow: isDark
                    ? "0 28px 56px rgba(0,0,0,0.45), 0 0 0 1px rgba(59,130,246,0.12)"
                    : "0 28px 56px rgba(0,0,0,0.12), 0 0 0 1px rgba(59,130,246,0.15)",
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <div className="card-img-wrap">
                  <img src={project.image} alt={project.title} />
                  <div
                    className="card-img-overlay"
                    style={{ background: `linear-gradient(to top, ${t.cardOverlay}, transparent)` }}
                  />
                </div>

                <div className="card-body">
                  <h3 className="card-title" style={{ color: project.accent }}>
                    {project.title}
                  </h3>
                  <p className="card-desc" style={{ color: t.cardDesc }}>
                    {project.description}
                  </p>

                  <div className="card-tags">
                    {project.tags.map((tag) => (
                      <motion.span
                        className="tag"
                        key={tag}
                        style={{
                          color: t.tagColor,
                          background: t.tagBg,
                          border: `1px solid ${t.tagBorder}`,
                        }}
                        whileHover={{
                          borderColor: "rgba(59,130,246,0.4)",
                          color: isDark ? "rgba(255,255,255,0.9)" : "#1e40af",
                          backgroundColor: "rgba(59,130,246,0.1)"
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <motion.button
                    className="card-link"
                    style={{ color: t.linkColor }}
                    whileHover={{ color: isDark ? "#fff" : "#0f172a", x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    View Project
                    <motion.span whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 500 }}>
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <motion.div
          className="dots"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <motion.button
              key={i}
              className="dot"
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              animate={{
                width: i === index ? 28 : 6,
                backgroundColor: i === index ? "#3b82f6" : t.dotInactive
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              whileHover={{ scale: 1.3 }}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
}