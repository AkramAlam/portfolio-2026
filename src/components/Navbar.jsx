import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ✅ Theme Context — export karo taaki baaki components use kar sakein
export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

// ✅ Theme Provider — App.js mein wrap karna hoga
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark(prev => !prev);
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ['Home', 'About', 'Projects', 'Contact'];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const t = {
    logoColor: isDark ? '#fff' : '#0f172a',
    linkColor: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(15,23,42,0.5)',
    linkHover: isDark ? 'rgba(255,255,255,0.9)' : '#0f172a',
    linkActive: isDark ? '#fff' : '#0f172a',
    pillBg: isDark ? 'rgba(167,139,250,0.1)' : 'rgba(99,102,241,0.08)',
    pillBorder: isDark ? 'rgba(167,139,250,0.18)' : 'rgba(99,102,241,0.2)',
    backdropBg: isDark ? 'rgba(8,12,20,0.88)' : 'rgba(248,250,252,0.92)',
    backdropBorder: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
    hamLine: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(15,23,42,0.7)',
    mobileBg: isDark ? 'rgba(8,12,20,0.97)' : 'rgba(248,250,252,0.97)',
    mobileLinkColor: isDark ? 'rgba(255,255,255,0.25)' : 'rgba(15,23,42,0.25)',
    mobileLinkHover: isDark ? '#fff' : '#0f172a',
    mobileFooter: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(15,23,42,0.2)',
    toggleBg: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(15,23,42,0.06)',
    toggleBorder: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(15,23,42,0.1)',
    toggleColor: isDark ? '#fff' : '#0f172a',
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');

        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 0 48px;
          font-family: 'DM Sans', sans-serif;
          transition: all 0.4s ease;
        }

        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.4s ease;
        }

        .navbar.scrolled .nav-inner { height: 60px; }

        .nav-backdrop {
          position: absolute;
          inset: 0;
          background: transparent;
          border-bottom: 1px solid transparent;
          backdrop-filter: blur(0px);
          transition: all 0.4s ease;
          pointer-events: none;
        }

        .navbar.scrolled .nav-backdrop {
          backdrop-filter: blur(20px);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
          position: relative;
          z-index: 1;
        }

        .nav-link {
          position: relative;
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          border-radius: 10px;
          transition: color 0.2s;
          cursor: pointer;
          background: none;
          border: none;
          font-family: 'DM Sans', sans-serif;
        }

        .nav-pill {
          position: absolute;
          inset: 0;
          border-radius: 10px;
          z-index: -1;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
          z-index: 1;
        }

        .nav-cta {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 20px;
          background: linear-gradient(135deg, #6366f1, #a78bfa);
          border: none;
          border-radius: 12px;
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(99,102,241,0.3);
        }

        .theme-toggle {
          width: 38px; height: 38px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          transition: all 0.2s;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }

        .ham-line {
          width: 22px;
          height: 2px;
          border-radius: 2px;
        }

        @media (max-width: 768px) {
          .navbar { padding: 0 24px; }
          .nav-links { display: none; }
          .nav-cta { display: none; }
          .hamburger { display: flex; }
        }

        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 99;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(24px);
          gap: 8px;
        }

        .mobile-link {
          font-family: 'Syne', sans-serif;
          font-size: 42px;
          font-weight: 800;
          text-decoration: none;
          letter-spacing: -2px;
          cursor: pointer;
          background: none;
          border: none;
          transition: color 0.2s ease;
        }

        .mobile-footer {
          position: absolute;
          bottom: 40px;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
      `}</style>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        {/* Backdrop — colors via inline style */}
        <div
          className="nav-backdrop"
          style={scrolled ? {
            background: t.backdropBg,
            borderBottomColor: t.backdropBorder,
          } : {}}
        />

        <div className="nav-inner">

          {/* Logo */}
          <motion.a
            href="#home"
            className="nav-logo"
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 24,
              fontWeight: 800,
              textDecoration: 'none',
              letterSpacing: -1,
              position: 'relative',
              zIndex: 1,
              color: t.logoColor,
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            Akram
            <span style={{
              background: 'linear-gradient(135deg, #818cf8, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>.</span>
          </motion.a>

          {/* Desktop Links */}
          <motion.div
            className="nav-links"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
                style={{ color: active === item ? t.linkActive : t.linkColor }}
                onClick={() => setActive(item)}
              >
                {active === item && (
                  <motion.div
                    className="nav-pill"
                    layoutId="nav-pill"
                    style={{ background: t.pillBg, border: `1px solid ${t.pillBorder}` }}
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}
                {item}
              </a>
            ))}
          </motion.div>

          {/* Right: Toggle + CTA + Hamburger */}
          <motion.div
            className="nav-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* 🌙 / ☀️ Theme Toggle */}
            <motion.button
              className="theme-toggle"
              onClick={toggleTheme}
              style={{
                background: t.toggleBg,
                border: `1px solid ${t.toggleBorder}`,
                color: t.toggleColor,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400 }}
              title="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={isDark ? 'moon' : 'sun'}
                  initial={{ rotate: -30, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 30, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? '🌙' : '☀️'}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            <motion.button
              className="nav-cta"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 28px rgba(99,102,241,0.45)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Hire Me ✦
            </motion.button>

            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <motion.div
                className="ham-line"
                style={{ background: t.hamLine }}
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="ham-line"
                style={{ background: t.hamLine }}
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="ham-line"
                style={{ background: t.hamLine }}
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="mobile-menu"
            style={{ background: t.mobileBg }}
            initial={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 95% 5%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            {links.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="mobile-link"
                style={{ color: t.mobileLinkColor }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                onClick={() => { setActive(item); setMenuOpen(false); }}
              >
                {item}
              </motion.a>
            ))}
            <div className="mobile-footer" style={{ color: t.mobileFooter }}>
              Portfolio 2026
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;