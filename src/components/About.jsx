import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './Navbar';

const About = () => {
  const { isDark } = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'JavaScript', icon: '⚡', color: '#F7DF1E' },
    { name: 'Tailwind CSS', icon: '🎨', color: '#38BDF8' },
    { name: 'HTML5', icon: '🧱', color: '#E34F26' },
    { name: 'CSS3', icon: '✨', color: '#1572B6' },
    { name: 'Git', icon: '🔀', color: '#F05032' },
    { name: 'Responsive UI', icon: '📱', color: '#A78BFA' },
    { name: 'Figma', icon: '🖌️', color: '#F24E1E' },
  ];

  const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Built' },
    { value: '8+', label: 'Technologies' },
  ];

  const t = {
    bg: isDark ? '#080c14' : '#f8fafc',
    gridColor: isDark ? 'rgba(139,92,246,0.03)' : 'rgba(139,92,246,0.04)',
    glow1: isDark ? 'rgba(139,92,246,0.06)' : 'rgba(139,92,246,0.04)',
    glow2: isDark ? 'rgba(236,72,153,0.05)' : 'rgba(236,72,153,0.03)',
    labelColor: '#a78bfa',
    labelBg: isDark ? 'rgba(139,92,246,0.1)' : 'rgba(139,92,246,0.08)',
    labelBorder: isDark ? 'rgba(139,92,246,0.2)' : 'rgba(139,92,246,0.25)',
    titleColor: isDark ? '#fff' : '#0f172a',
    cardBg: isDark
      ? 'linear-gradient(135deg, rgba(30,41,59,0.6) 0%, rgba(15,23,42,0.8) 100%)'
      : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(241,245,249,0.95) 100%)',
    cardBorder: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(15,23,42,0.08)',
    cardShimmer: isDark ? 'rgba(167,139,250,0.4)' : 'rgba(167,139,250,0.3)',
    cardShimmer2: isDark ? 'rgba(236,72,153,0.4)' : 'rgba(236,72,153,0.3)',
    bioText: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(15,23,42,0.6)',
    bioStrong: isDark ? 'rgba(255,255,255,0.9)' : '#0f172a',
    techTitle: isDark ? '#fff' : '#0f172a',
    techSubtitle: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(15,23,42,0.4)',
    skillBg: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(15,23,42,0.04)',
    skillBorder: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(15,23,42,0.1)',
    skillColor: isDark ? 'rgba(255,255,255,0.65)' : 'rgba(15,23,42,0.65)',
    statBg: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(15,23,42,0.02)',
    statBorder: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(15,23,42,0.07)',
    statLabel: isDark ? 'rgba(255,255,255,0.35)' : 'rgba(15,23,42,0.4)',
    termBg: isDark ? 'rgba(5,8,16,0.9)' : 'rgba(15,23,42,0.92)',
    termBorder: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(15,23,42,0.12)',
    termBarBg: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.05)',
    termBarBorder: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.08)',
    termTitle: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.3)',
    termCmd: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.8)',
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.7, y: 15 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 280, damping: 18 } }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .about-section {
          min-height: 100vh;
          padding: 100px 48px;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
          transition: background 0.4s ease;
        }

        .about-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 24px;
          transition: all 0.3s;
        }

        .section-label::before {
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

        .main-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(52px, 7vw, 84px);
          font-weight: 800;
          line-height: 0.95;
          letter-spacing: -3px;
          margin-bottom: 0;
          transition: color 0.3s;
        }

        .main-title .accent {
          display: block;
          background: linear-gradient(135deg, #a78bfa 0%, #ec4899 50%, #f97316 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-top: 72px;
          align-items: start;
        }

        .left-col { display: flex; flex-direction: column; gap: 24px; }
        .right-col { display: flex; flex-direction: column; gap: 24px; }

        .bio-card {
          border-radius: 24px;
          padding: 36px;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(20px);
          transition: all 0.3s;
        }

        .bio-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          pointer-events: none;
        }

        .bio-avatar {
          width: 52px; height: 52px;
          background: linear-gradient(135deg, #a78bfa, #ec4899);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin-bottom: 20px;
        }

        .bio-text {
          font-size: 15px;
          line-height: 1.8;
          margin-bottom: 14px;
          transition: color 0.3s;
        }

        .bio-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 8px;
          padding: 12px 24px;
          background: linear-gradient(135deg, #7c3aed, #db2777);
          border: none;
          border-radius: 14px;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 8px 32px rgba(124,58,237,0.35);
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .stat-card {
          border-radius: 18px;
          padding: 20px 16px;
          text-align: center;
          transition: all 0.3s;
        }

        .stat-value {
          font-family: 'Syne', sans-serif;
          font-size: 32px;
          font-weight: 800;
          background: linear-gradient(135deg, #a78bfa, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 6px;
        }

        .stat-label {
          font-size: 11px;
          letter-spacing: 0.5px;
          font-weight: 500;
          transition: color 0.3s;
        }

        .tech-card {
          border-radius: 24px;
          padding: 32px;
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
          transition: all 0.3s;
        }

        .tech-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          pointer-events: none;
        }

        .tech-title {
          font-family: 'Syne', sans-serif;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 6px;
          transition: color 0.3s;
        }

        .tech-subtitle {
          font-size: 13px;
          margin-bottom: 24px;
          transition: color 0.3s;
        }

        .skills-grid { display: flex; flex-wrap: wrap; gap: 10px; }

        .skill-pill {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 8px 14px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 500;
          cursor: default;
          transition: all 0.25s ease;
        }

        .skill-icon { font-size: 15px; }

        .terminal-card {
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s;
        }

        .terminal-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 18px;
        }

        .dot-red { width: 10px; height: 10px; border-radius: 50%; background: #ff5f57; }
        .dot-yellow { width: 10px; height: 10px; border-radius: 50%; background: #febc2e; }
        .dot-green { width: 10px; height: 10px; border-radius: 50%; background: #28c840; }

        .terminal-body {
          padding: 20px 22px;
          font-family: 'Fira Code', 'Courier New', monospace;
          font-size: 13px;
          line-height: 2;
        }

        .t-line { display: flex; align-items: center; gap: 10px; }
        .t-prompt { color: #a78bfa; }
        .t-output { color: #34d399; padding-left: 20px; }
        .t-cursor {
          display: inline-block;
          width: 8px; height: 14px;
          background: #a78bfa;
          border-radius: 1px;
          animation: blink 1s steps(1) infinite;
          vertical-align: middle;
          margin-left: 3px;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .glow-1 {
          position: absolute;
          top: -300px; left: -200px;
          width: 800px; height: 800px;
          pointer-events: none;
          transition: background 0.4s;
        }

        .glow-2 {
          position: absolute;
          bottom: -200px; right: -100px;
          width: 600px; height: 600px;
          pointer-events: none;
          transition: background 0.4s;
        }

        .grid-bg {
          position: absolute; inset: 0;
          background-size: 60px 60px;
          pointer-events: none;
          transition: background-image 0.4s;
        }
      `}</style>

      <section
        className="about-section"
        id="about"
        style={{ background: t.bg }}
      >
        {/* Background effects */}
        <div
          className="glow-1"
          style={{ background: `radial-gradient(circle, ${t.glow1} 0%, transparent 65%)` }}
        />
        <div
          className="glow-2"
          style={{ background: `radial-gradient(circle, ${t.glow2} 0%, transparent 65%)` }}
        />
        <div
          className="grid-bg"
          style={{
            backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`
          }}
        />

        <div className="about-inner">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div
              className="section-label"
              style={{ color: t.labelColor, background: t.labelBg, border: `1px solid ${t.labelBorder}` }}
            >
              About Me
            </div>
            <h2 className="main-title" style={{ color: t.titleColor }}>
              Crafting Digital
              <span className="accent">Experiences.</span>
            </h2>
          </motion.div>

          <div className="about-grid">

            {/* LEFT */}
            <div className="left-col">

              {/* Bio Card */}
              <motion.div
                className="bio-card"
                style={{ background: t.cardBg, border: `1px solid ${t.cardBorder}` }}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div
                  style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                    background: `linear-gradient(90deg, transparent, ${t.cardShimmer}, transparent)`
                  }}
                />
                <div className="bio-avatar">👨‍💻</div>
                <p className="bio-text" style={{ color: t.bioText }}>
                  Hello! I'm <strong style={{ color: t.bioStrong }}>Akram</strong>, a frontend developer who loves crafting beautiful and functional digital experiences. I specialize in building modern, interactive interfaces using <strong style={{ color: t.bioStrong }}>React</strong> and <strong style={{ color: t.bioStrong }}>Tailwind CSS</strong>.
                </p>
                <p className="bio-text" style={{ color: t.bioText }}>
                  Beyond just writing clean code, I have a strong eye for how brands present themselves visually online — delivering quality and seamless engagement every time.
                </p>
                <motion.button
                  className="bio-btn"
                  whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(124,58,237,0.5)' }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span>Download Resume</span>
                  <span>↓</span>
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="stats-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                {stats.map((s, i) => (
                  <motion.div
                    className="stat-card"
                    key={i}
                    style={{ background: t.statBg, border: `1px solid ${t.statBorder}` }}
                    whileHover={{
                      scale: 1.04,
                      background: isDark ? 'rgba(139,92,246,0.08)' : 'rgba(139,92,246,0.06)',
                      borderColor: 'rgba(139,92,246,0.25)'
                    }}
                    transition={{ type: 'spring', stiffness: 350 }}
                  >
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label" style={{ color: t.statLabel }}>{s.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT */}
            <div className="right-col">

              {/* Tech Stack */}
              <motion.div
                className="tech-card"
                style={{ background: t.cardBg, border: `1px solid ${t.cardBorder}` }}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div
                  style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                    background: `linear-gradient(90deg, transparent, ${t.cardShimmer2}, transparent)`
                  }}
                />
                <div className="tech-title" style={{ color: t.techTitle }}>My Tech Stack</div>
                <div className="tech-subtitle" style={{ color: t.techSubtitle }}>Technologies I work with daily</div>

                <motion.div
                  className="skills-grid"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      className="skill-pill"
                      variants={skillVariants}
                      onHoverStart={() => setHoveredSkill(i)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      style={{
                        background: hoveredSkill === i ? `${skill.color}12` : t.skillBg,
                        border: `1px solid ${hoveredSkill === i ? `${skill.color}40` : t.skillBorder}`,
                        color: hoveredSkill === i ? skill.color : t.skillColor,
                        boxShadow: hoveredSkill === i ? `0 4px 20px ${skill.color}25` : 'none',
                      }}
                    >
                      <span className="skill-icon">{skill.icon}</span>
                      {skill.name}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Terminal */}
              <motion.div
                className="terminal-card"
                style={{ background: t.termBg, border: `1px solid ${t.termBorder}` }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.35 }}
              >
                <div
                  className="terminal-bar"
                  style={{
                    background: t.termBarBg,
                    borderBottom: `1px solid ${t.termBarBorder}`
                  }}
                >
                  <div className="dot-red" />
                  <div className="dot-yellow" />
                  <div className="dot-green" />
                  <span style={{ fontSize: 12, color: t.termTitle, fontFamily: 'monospace', marginLeft: 8 }}>
                    akram@portfolio ~
                  </span>
                </div>
                <div className="terminal-body">
                  <div className="t-line">
                    <span className="t-prompt">~</span>
                    <span className="t-cmd" style={{ color: t.termCmd }}>whoami</span>
                  </div>
                  <div className="t-output">Akram — Frontend Developer</div>
                  <div className="t-line">
                    <span className="t-prompt">~</span>
                    <span className="t-cmd" style={{ color: t.termCmd }}>cat passion.txt</span>
                  </div>
                  <div className="t-output">Building beautiful UIs 🚀</div>
                  <div className="t-line">
                    <span className="t-prompt">~</span>
                    <span className="t-cmd" style={{ color: t.termCmd }}>
                      status<span className="t-cursor" />
                    </span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;