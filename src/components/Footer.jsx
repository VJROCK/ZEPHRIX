import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/websiteData';
import { Send, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Footer({ onSelectService }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="site-footer" aria-label="Site Footer">
      <div className="wrap">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <a href="#top" className="brand-logo" style={{ color: '#FFFFFF' }}>
              <svg viewBox="0 0 240 170" width="42" height="34" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 24 L138 24" fill="none" stroke="#4D7BFF" stroke-width="22" strokeLinecap="round" />
                <path d="M130 32 L38 134" fill="none" stroke="#FFFFFF" stroke-width="22" strokeLinecap="round" />
                <path d="M28 142 L146 142" fill="none" stroke="#3ED0E8" stroke-width="22" strokeLinecap="round" />
                <path d="M152 54 L200 54" fill="none" stroke="#4D7BFF" stroke-width="10" strokeLinecap="round" />
                <path d="M152 83 L188 83" fill="none" stroke="#5AA0F5" stroke-width="10" strokeLinecap="round" />
                <path d="M152 112 L212 112" fill="none" stroke="#3ED0E8" stroke-width="10" strokeLinecap="round" />
              </svg>
              <span>Zephrix</span>
            </a>

            <p style={{ marginTop: '14px' }}>
              Enterprise technology built at wind speed. AI products, ERP cloud modernization, QA automation suites, and 24/7 managed infrastructure.
            </p>

            <div style={{ marginTop: '18px', fontSize: '13px', color: '#94A3B8' }}>
              Headquartered in Phoenix, Arizona, USA.<br />
              Delivering globally with 24/7 coverage.
            </div>
          </div>

          {/* Column 1: Services */}
          <div className="footer-col">
            <h5>Capabilities</h5>
            <a href="#services">AI Product Development</a>
            <a href="#services">ERP Modernization</a>
            <a href="#services">QA Tool Solutions</a>
            <a href="#services">Media House Platforms</a>
            <a href="#services">Cloud &amp; Onprem Ops</a>
            <a href="#services">Technical Guidance</a>
          </div>

          {/* Column 2: Company */}
          <div className="footer-col">
            <h5>Company</h5>
            <a href="#about">About Zephrix</a>
            <a href="#work">Case Studies &amp; Results</a>
            <a href="#team">Leadership &amp; Team</a>
            <a href="#careers">Careers (We're Hiring)</a>
            <a href="#industries">Industries Served</a>
            <a href="#stack">Tech Stack Alliances</a>
          </div>

          {/* Column 3: Insights & Newsletter */}
          <div className="footer-col">
            <h5>Stay Ahead</h5>
            <p style={{ fontSize: '13px', color: 'var(--slate-400)', lineHeight: '1.5' }}>
              Quarterly enterprise engineering insights on AI architectures and cloud optimizations.
            </p>

            <div className="newsletter-box">
              {subscribed ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#34D399', fontSize: '13px', marginTop: '12px' }}>
                  <CheckCircle2 size={16} />
                  <span>Subscribed to engineering brief!</span>
                </div>
              ) : (
                <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                  />
                  <button type="submit" className="btn btn-primary btn-sm" aria-label="Subscribe">
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>

            <div style={{ marginTop: '24px', display: 'flex', gap: '16px' }}>
              <a href={COMPANY_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--slate-400)', fontSize: '13px' }}>
                LinkedIn
              </a>
              <a href={COMPANY_INFO.socials.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--slate-400)', fontSize: '13px' }}>
                GitHub
              </a>
              <a href={COMPANY_INFO.socials.twitter} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--slate-400)', fontSize: '13px' }}>
                X / Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#top">Privacy Policy</a>
            <a href="#top">Terms of Service</a>
            <a href="#top">Security &amp; SOC-2</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
