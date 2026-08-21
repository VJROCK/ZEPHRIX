import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Cloud, Sparkles } from 'lucide-react';
import WindCanvas from './WindCanvas';
import HeroConsole from './HeroConsole';

export default function Hero({ onOpenScheduleModal, onSelectService }) {
  return (
    <section className="hero-section" id="top">
      <WindCanvas />
      <div className="hero-glow-bg"></div>

      <div className="wrap">
        <div className="hero-grid">
          {/* Left Column: Core Value Proposition */}
          <div className="hero-content">
            <div className="eyebrow">AI · ERP · Cloud · QA Engineering</div>
            
            <h1>
              Enterprise technology,<br />
              built at <span className="grad-text">wind speed</span>.
            </h1>

            <p className="hero-lead">
              Zephrix Technologies designs production AI products, modernizes legacy ERP systems, and delivers autonomous QA automation — engineered natively for AWS and Microsoft Azure. We empower enterprises and high-growth brands to ship next-gen software with velocity and certainty.
            </p>

            <div className="hero-cta-group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onOpenScheduleModal}
              >
                <span>Book Discovery Call</span>
                <ArrowRight size={17} />
              </button>

              <a href="#services" className="btn btn-ghost">
                Explore Services
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="hero-trust-bar">
              <div className="hero-trust-item">
                <Cloud size={15} style={{ color: 'var(--blue-500)' }} />
                <span><b>AWS &amp; Azure</b> Native</span>
              </div>
              <span className="dot-sep">•</span>
              <div className="hero-trust-item">
                <Zap size={15} style={{ color: 'var(--cyan-500)' }} />
                <span><b>24/7</b> Onprem &amp; Cloud Support</span>
              </div>
              <span className="dot-sep">•</span>
              <div className="hero-trust-item">
                <ShieldCheck size={15} style={{ color: '#10B981' }} />
                <span><b>ISO &amp; SOC-2</b> Aligned Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Simulated Delivery Console */}
          <div className="hero-panel-wrap">
            <HeroConsole onSelectService={onSelectService} />
          </div>
        </div>
      </div>
    </section>
  );
}
