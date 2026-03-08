import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './Navbar';

const Footer = () => {
  const { isDark } = useTheme();
  const year = new Date().getFullYear();

  const socials = [
    { name: 'GitHub', icon: '🐙', color: '#6366f1', href: '#' },
    { name: 'LinkedIn', icon: '💼', color: '#60a5fa', href: '#' },
    { name: 'Twitter', icon: '🐦', color: '#38bdf8', href: '#' },
  ];

  const links = ['About', 'Projects', 'Contact'];

  const t = {
    bg: isDark ? '#080c14' : '#f1f5f9',
    glowBg: isDark ? 'rgba(52,211,153,0.04)' : 'rgba(52,211,153,0.03)',
    divider: isDark
      ? 'linear-gradient(90deg, transparent, rgba(52,211,153,0.2), rgba(167,139,250,0.2), transparent)'
      : 'linear-gradient(90deg, transparent, rgba(52,211,153,0.3), rgba(167,139,250,0.3), transparent)',
    logoColor: isDark ? '#fff' : '#0f172a',
    tagline: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(15,23,42,0.45)',
    navLabel: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(15,23,42,0.3)',
    navLink: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(15,23,42,0.5)',
    navLinkHover: isDark ? '#fff' : '#0f172a',
    pillBg: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(15,23,42,0.03)',
    pillBorder: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(15,23,42,0.08)',
    pillColor: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(15,23,42,0.5)',
    bottomBorder: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(15,23,42,0.06)',
    copyColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(15,23,42,0.35)',
    madeColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(15,23,42,0.35)',
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .footer-wrap {
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
          transition: background 0.4s ease;
        }

        .footer-glow {
          position: absolute;
          bottom: -100px; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 300px;
          pointer-events: none;
          transition: background 0.4s;
        }

        .footer-divider {
          width: 100%;
          height: 1px;
          transition: background 0.4s;
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 48px 48px 40px;
          position: relative;
          z-index: 2;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 40px;
          gap: 32px;
        }

        .footer-logo {
          font-family: 'Syne', sans-serif;
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 8px;
          transition: color 0.3s;
        }

        .footer-logo span {
          background: linear-gradient(135deg, #34d399, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-tagline {
          font-size: 13px;
          max-width: 220px;
          line-height: 1.6;
          transition: color 0.3s;
        }

        .footer-nav-label, .footer-socials-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 12px;
          transition: color 0.3s;
        }

        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-nav a {
          font-size: 14px;
          text-decoration: none;
          transition: color 0.2s;
          display: inline-block;
        }

        .footer-socials {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .social-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: all 0.2s;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          gap: 16px;
          flex-wrap: wrap;
          transition: border-color 0.3s;
        }

        .footer-copy {
          font-size: 13px;
          transition: color 0.3s;
        }

        .footer-copy span { color: rgba(52,211,153,0.7); }

        .footer-made {
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: color 0.3s;
        }

        .heart {
          color: #f43f5e;
          animation: heartbeat 1.4s ease-in-out infinite;
          display: inline-block;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          14% { transform: scale(1.25); }
          28% { transform: scale(1); }
          42% { transform: scale(1.18); }
          56% { transform: scale(1); }
        }

        .status-dot {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          color: #34d399;
          background: rgba(52,211,153,0.08);
          border: 1px solid rgba(52,211,153,0.18);
          padding: 5px 12px;
          border-radius: 100px;
          margin-top: 16px;
        }

        .status-dot::before {
          content: '';
          width: 6px; height: 6px;
          background: #34d399;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
      `}</style>

      <footer className="footer-wrap" style={{ background: t.bg }}>
        <div
          className="footer-glow"
          style={{ background: `radial-gradient(ellipse, ${t.glowBg} 0%, transparent 70%)` }}
        />

        <div
          className="footer-divider"
          style={{ background: t.divider }}
        />

        <div className="footer-inner">
          <div className="footer-top">

            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="footer-logo" style={{ color: t.logoColor }}>
                Akram<span>.</span>
              </div>
              <p className="footer-tagline" style={{ color: t.tagline }}>
                Frontend developer crafting beautiful, interactive digital experiences.
              </p>
              <div className="status-dot">Available for work</div>
            </motion.div>

            {/* Nav */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="footer-nav-label" style={{ color: t.navLabel }}>
                Navigation
              </div>
              <div className="footer-nav">
                {links.map((link) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    style={{ color: t.navLink }}
                    whileHover={{ x: 5, color: t.navLinkHover }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="footer-socials-label" style={{ color: t.navLabel }}>
                Find Me
              </div>
              <div className="footer-socials">
                {socials.map((s) => (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    className="social-pill"
                    style={{
                      background: t.pillBg,
                      border: `1px solid ${t.pillBorder}`,
                      color: t.pillColor,
                    }}
                    whileHover={{
                      y: -3,
                      borderColor: `${s.color}40`,
                      color: s.color,
                      backgroundColor: `${s.color}08`,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <span>{s.icon}</span> {s.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            className="footer-bottom"
            style={{ borderTop: `1px solid ${t.bottomBorder}` }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="footer-copy" style={{ color: t.copyColor }}>
              © {year} <span>Akram</span>. All rights reserved.
            </p>
            <p className="footer-made" style={{ color: t.madeColor }}>
              Built with <span className="heart">♥</span> using React & Tailwind
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;