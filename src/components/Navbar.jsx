import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, PhoneCall, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenScheduleModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Active section detection
      const sections = ['services', 'work', 'industries', 'stack', 'about', 'team', 'careers', 'contact'];
      const scrollPos = window.scrollY + 200;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Industries', href: '#industries', id: 'industries' },
    { name: 'Tech Stack', href: '#stack', id: 'stack' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Team', href: '#team', id: 'team' },
    { name: 'Careers', href: '#careers', id: 'careers' }
  ];

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="wrap">
          <nav className="nav-container" aria-label="Main Navigation">
            {/* Logo */}
            <a href="#top" className="brand-logo" aria-label="Zephrix Technologies LLC Home">
              <svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M20 24 L138 24" fill="none" stroke="#2B5CE6" stroke-width="22" strokeLinecap="round" />
                <path d="M130 32 L38 134" fill="none" stroke="#1A2340" stroke-width="22" strokeLinecap="round" />
                <path d="M28 142 L146 142" fill="none" stroke="#16B5D0" stroke-width="22" strokeLinecap="round" />
                <path d="M152 54 L200 54" fill="none" stroke="#2B5CE6" stroke-width="10" strokeLinecap="round" />
                <path d="M152 83 L188 83" fill="none" stroke="#1E86DB" stroke-width="10" strokeLinecap="round" />
                <path d="M152 112 L212 112" fill="none" stroke="#16B5D0" stroke-width="10" strokeLinecap="round" />
              </svg>
              <div className="brand-title">
                <span>Zephrix</span>
                <span className="llc">Technologies LLC</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="nav-links">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={activeSection === link.id ? 'active' : ''}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="nav-actions">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => {
                  if (onOpenScheduleModal) onOpenScheduleModal();
                  else {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Sparkles size={15} />
                <span>Start a Project</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile menu"
              >
                <Menu size={26} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="drawer-panel"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="drawer-head">
            <div className="brand-logo">
              <svg viewBox="0 0 240 170" width="36" height="28" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 24 L138 24" fill="none" stroke="#2B5CE6" stroke-width="22" strokeLinecap="round" />
                <path d="M130 32 L38 134" fill="none" stroke="#1A2340" stroke-width="22" strokeLinecap="round" />
                <path d="M28 142 L146 142" fill="none" stroke="#16B5D0" stroke-width="22" strokeLinecap="round" />
              </svg>
              <span>Zephrix</span>
            </div>
            <button
              type="button"
              className="modal-close-btn"
              style={{ position: 'static' }}
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="drawer-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.name}</span>
                <ArrowRight size={16} style={{ color: 'var(--slate-400)' }} />
              </a>
            ))}
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '28px' }}>
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenScheduleModal) onOpenScheduleModal();
              }}
            >
              <PhoneCall size={16} />
              <span>Book Discovery Call</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
