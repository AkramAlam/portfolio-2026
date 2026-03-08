import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './Navbar';

const Contact = () => {
  const { isDark } = useTheme();
  const [focused, setFocused] = useState(null);
  const [sent, setSent] = useState(false);

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'hello@akram.dev', color: '#34d399' },
    { icon: '📍', label: 'Location', value: 'Faridabad, India', color: '#a78bfa' },
    { icon: '⚡', label: 'Status', value: 'Open to opportunities', color: '#f97316' },
  ];

  const socials = [
    { name: 'GitHub', icon: '🐙', color: '#6366f1' },
    { name: 'LinkedIn', icon: '💼', color: '#60a5fa' },
    { name: 'Twitter', icon: '🐦', color: '#38bdf8' },
  ];

  const t = {
    bg: isDark ? '#080c14' : '#f8fafc',
    glow1: isDark ? 'rgba(52,211,153,0.06)' : 'rgba(52,211,153,0.04)',
    glow2: isDark ? 'rgba(167,139,250,0.05)' : 'rgba(167,139,250,0.03)',
    gridColor: isDark ? 'rgba(52,211,153,0.025)' : 'rgba(52,211,153,0.04)',
    labelColor: '#34d399',
    labelBg: isDark ? 'rgba(52,211,153,0.08)' : 'rgba(52,211,153,0.07)',
    labelBorder: isDark ? 'rgba(52,211,153,0.2)' : 'rgba(52,211,153,0.25)',
    titleColor: isDark ? '#fff' : '#0f172a',
    cardBg: isDark
      ? 'linear-gradient(135deg, rgba(30,41,59,0.6) 0%, rgba(15,23,42,0.8) 100%)'
      : 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(241,245,249,0.98) 100%)',
    cardBorder: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(15,23,42,0.08)',
    infoHeading: isDark ? '#fff' : '#0f172a',
    infoDesc: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(15,23,42,0.5)',
    ciItemBg: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(15,23,42,0.02)',
    ciItemBorder: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(15,23,42,0.07)',
    ciLabel: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(15,23,42,0.35)',
    socialBg: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(15,23,42,0.03)',
    socialBorder: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(15,23,42,0.08)',
    socialColor: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(15,23,42,0.55)',
    formTitle: isDark ? '#fff' : '#0f172a',
    formSubtitle: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(15,23,42,0.4)',
    formLabel: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(15,23,42,0.45)',
    inputBg: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(15,23,42,0.03)',
    inputBorder: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(15,23,42,0.1)',
    inputColor: isDark ? '#fff' : '#0f172a',
    inputPlaceholder: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(15,23,42,0.25)',
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .contact-section {
          min-height: 100vh;
          padding: 100px 48px;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
          transition: background 0.4s ease;
        }

        .contact-glow-1 {
          position: absolute;
          top: -300px; right: -200px;
          width: 700px; height: 700px;
          pointer-events: none;
          transition: background 0.4s;
        }

        .contact-glow-2 {
          position: absolute;
          bottom: -200px; left: -100px;
          width: 600px; height: 600px;
          pointer-events: none;
          transition: background 0.4s;
        }

        .contact-grid-bg {
          position: absolute; inset: 0;
          background-size: 60px 60px;
          pointer-events: none;
          transition: background-image 0.4s;
        }

        .contact-inner {
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
          background: #34d399;
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
          transition: color 0.3s;
        }

        .main-title .accent {
          display: block;
          background: linear-gradient(135deg, #34d399 0%, #059669 50%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 32px;
          margin-top: 72px;
          align-items: start;
        }

        .left-col { display: flex; flex-direction: column; gap: 20px; }
        .right-col { display: flex; flex-direction: column; gap: 20px; }

        .info-card {
          border-radius: 24px;
          padding: 36px;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(20px);
          transition: all 0.3s;
        }

        .info-icon {
          width: 52px; height: 52px;
          background: linear-gradient(135deg, rgba(52,211,153,0.15), rgba(167,139,250,0.15));
          border: 1px solid rgba(52,211,153,0.2);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin-bottom: 20px;
        }

        .info-heading {
          font-family: 'Syne', sans-serif;
          font-size: 26px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 12px;
          transition: color 0.3s;
        }

        .info-desc {
          font-size: 14px;
          line-height: 1.8;
          margin-bottom: 28px;
          transition: color 0.3s;
        }

        .contact-items { display: flex; flex-direction: column; gap: 12px; }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          border-radius: 14px;
          transition: all 0.25s ease;
          cursor: default;
        }

        .ci-icon {
          width: 38px; height: 38px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
        }

        .ci-label {
          font-size: 11px;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
          transition: color 0.3s;
        }

        .ci-value {
          font-size: 14px;
          font-weight: 500;
        }

        .socials-row { display: flex; gap: 10px; }

        .social-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 16px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: all 0.2s;
        }

        .form-card {
          border-radius: 24px;
          padding: 36px;
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
          transition: all 0.3s;
        }

        .form-title {
          font-family: 'Syne', sans-serif;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 4px;
          transition: color 0.3s;
        }

        .form-subtitle {
          font-size: 13px;
          margin-bottom: 28px;
          transition: color 0.3s;
        }

        .form-group { margin-bottom: 18px; }

        .form-label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
          text-transform: uppercase;
          transition: color 0.3s;
        }

        .form-input {
          width: 100%;
          border-radius: 14px;
          padding: 13px 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          outline: none;
          transition: all 0.25s ease;
          box-sizing: border-box;
        }

        .form-input:focus {
          border-color: rgba(52,211,153,0.45) !important;
          background: rgba(52,211,153,0.04) !important;
          box-shadow: 0 0 0 3px rgba(52,211,153,0.08);
        }

        textarea.form-input { resize: none; }

        .submit-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #059669, #34d399);
          border: none;
          border-radius: 14px;
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 0.5px;
          box-shadow: 0 8px 32px rgba(52,211,153,0.25);
        }

        .success-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 18px;
          background: rgba(52,211,153,0.1);
          border: 1px solid rgba(52,211,153,0.25);
          border-radius: 14px;
          font-size: 14px;
          color: #34d399;
          font-weight: 500;
        }
      `}</style>

      <section
        className="contact-section"
        id="contact"
        style={{ background: t.bg }}
      >
        <div
          className="contact-glow-1"
          style={{ background: `radial-gradient(circle, ${t.glow1} 0%, transparent 65%)` }}
        />
        <div
          className="contact-glow-2"
          style={{ background: `radial-gradient(circle, ${t.glow2} 0%, transparent 65%)` }}
        />
        <div
          className="contact-grid-bg"
          style={{
            backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`
          }}
        />

        <div className="contact-inner">

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
              Contact
            </div>
            <h2 className="main-title" style={{ color: t.titleColor }}>
              Let's Work
              <span className="accent">Together.</span>
            </h2>
          </motion.div>

          <div className="contact-grid">

            {/* LEFT */}
            <div className="left-col">
              <motion.div
                className="info-card"
                style={{ background: t.cardBg, border: `1px solid ${t.cardBorder}` }}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* Top shimmer line */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                  background: `linear-gradient(90deg, transparent, rgba(52,211,153,0.4), transparent)`
                }} />

                <div className="info-icon">🤝</div>
                <h3 className="info-heading" style={{ color: t.infoHeading }}>
                  Let's build something awesome.
                </h3>
                <p className="info-desc" style={{ color: t.infoDesc }}>
                  I'm currently open to new opportunities. Whether you have a question, a project idea, or just want to say hi — I'll get back to you!
                </p>

                <div className="contact-items">
                  {contactInfo.map((item, i) => (
                    <motion.div
                      className="contact-item"
                      key={i}
                      style={{
                        background: t.ciItemBg,
                        border: `1px solid ${t.ciItemBorder}`,
                      }}
                      whileHover={{ x: 6, borderColor: `${item.color}30` }}
                      transition={{ type: 'spring', stiffness: 350 }}
                    >
                      <div className="ci-icon" style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="ci-label" style={{ color: t.ciLabel }}>{item.label}</div>
                        <div className="ci-value" style={{ color: item.color }}>{item.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Socials */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="socials-row"
              >
                {socials.map((s, i) => (
                  <motion.button
                    key={i}
                    className="social-btn"
                    style={{
                      background: t.socialBg,
                      border: `1px solid ${t.socialBorder}`,
                      color: t.socialColor,
                    }}
                    whileHover={{ y: -3, borderColor: `${s.color}40`, color: s.color, background: `${s.color}08` }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <span>{s.icon}</span> {s.name}
                  </motion.button>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Form */}
            <motion.div
              className="form-card"
              style={{ background: t.cardBg, border: `1px solid ${t.cardBorder}` }}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Top shimmer line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                background: `linear-gradient(90deg, transparent, rgba(167,139,250,0.4), transparent)`
              }} />

              <div className="form-title" style={{ color: t.formTitle }}>Send a Message</div>
              <div className="form-subtitle" style={{ color: t.formSubtitle }}>I typically reply within 24 hours</div>

              {sent ? (
                <motion.div
                  className="success-badge"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span>✅</span> Message sent! I'll get back to you soon.
                </motion.div>
              ) : (
                <>
                  {['name', 'email', 'subject', 'message'].map((field) => (
                    <div className="form-group" key={field}>
                      <label className="form-label" style={{ color: t.formLabel }}>
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      {field === 'message' ? (
                        <motion.textarea
                          rows={4}
                          className="form-input"
                          placeholder="Tell me about your project..."
                          style={{
                            background: t.inputBg,
                            border: `1px solid ${focused === field ? 'rgba(52,211,153,0.45)' : t.inputBorder}`,
                            color: t.inputColor,
                          }}
                          onFocus={() => setFocused(field)}
                          onBlur={() => setFocused(null)}
                          whileFocus={{ scale: 1.005 }}
                        />
                      ) : (
                        <motion.input
                          type={field === 'email' ? 'email' : 'text'}
                          className="form-input"
                          placeholder={
                            field === 'name' ? 'John Doe' :
                            field === 'email' ? 'john@example.com' :
                            'Project collaboration'
                          }
                          style={{
                            background: t.inputBg,
                            border: `1px solid ${focused === field ? 'rgba(52,211,153,0.45)' : t.inputBorder}`,
                            color: t.inputColor,
                          }}
                          onFocus={() => setFocused(field)}
                          onBlur={() => setFocused(null)}
                          whileFocus={{ scale: 1.005 }}
                        />
                      )}
                    </div>
                  ))}

                  <motion.button
                    className="submit-btn"
                    whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(52,211,153,0.4)' }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                    onClick={() => setSent(true)}
                  >
                    Send Message →
                  </motion.button>
                </>
              )}
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;