import React from 'react';
import { COMPANY_INFO } from '../data/websiteData';
import { Shield, Sparkles, Zap, Users, Compass, Globe } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      num: '01',
      title: 'Cloud-Native by Default',
      desc: 'Every solution is architected natively for AWS and Microsoft Azure — highly scalable, secure, and cost-efficient from day one.'
    },
    {
      num: '02',
      title: 'Senior Engineering Direct Access',
      desc: 'You work directly with principal architects and specialized senior engineers, eliminating unnecessary bureaucracy and friction.'
    },
    {
      num: '03',
      title: 'Measurable Outcome-Driven',
      desc: 'We measure success in business ROI — faster time-to-market, 99.99% system uptime, defect elimination, and cloud cost savings.'
    }
  ];

  return (
    <section id="about" className="sec-alt" aria-label="About Zephrix Technologies">
      <div className="wrap">
        <div className="about-grid">
          {/* Left Column: Visual Pillars Console */}
          <div className="about-vis">
            <div className="pillars-list">
              {pillars.map((p) => (
                <div key={p.num} className="pillar-item">
                  <span className="pillar-num">{p.num}</span>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Company Story */}
          <div className="about-content">
            <div className="eyebrow">About Zephrix</div>
            <h2>A technology partner built for what's next</h2>
            
            <p style={{ color: 'var(--slate-700)', fontSize: '16.5px', marginBottom: '16px', lineHeight: '1.65' }}>
              Zephrix Technologies LLC is a high-velocity software engineering company helping enterprises, startups, and media giants build modern software. We integrate generative AI products, ERP cloud modernization, automated QA frameworks, and 24/7 cloud operations under one cohesive roof.
            </p>

            <p style={{ color: 'var(--slate-700)', fontSize: '16px', marginBottom: '24px', lineHeight: '1.65' }}>
              Our name comes from <em>zephyr</em> — a fast, favorable wind. That is how we approach every engineering engagement: bringing unstoppable momentum, architectural precision, and sustained lift to your organization.
            </p>

            {/* Quick Metrics Bar */}
            <div className="about-stats-row">
              <div className="about-stat-item">
                <b>{COMPANY_INFO.founded}</b>
                <span>Founded</span>
              </div>
              <div className="about-stat-item">
                <b>Phoenix, AZ</b>
                <span>Headquarters</span>
              </div>
              <div className="about-stat-item">
                <b>Global Reach</b>
                <span>Remote-First Hub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
