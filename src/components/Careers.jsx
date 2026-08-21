import React from 'react';
import { CAREERS } from '../data/websiteData';
import { ArrowRight, CheckCircle2, Globe, Heart, Laptop, Zap } from 'lucide-react';

export default function Careers({ onOpenJobModal }) {
  const benefits = [
    { icon: <Globe size={18} />, text: 'Remote-first culture across global time zones' },
    { icon: <Zap size={18} />, text: 'High-ownership engineering without red tape' },
    { icon: <Laptop size={18} />, text: 'Latest Apple M3 Max / M4 hardware & home office budget' },
    { icon: <Heart size={18} />, text: 'Generous learning stipend & conference sponsorships' }
  ];

  return (
    <section id="careers" className="sec-alt" aria-label="Careers at Zephrix Technologies">
      <div className="wrap">
        <div className="careers-grid">
          {/* Left Column: Mission & Culture */}
          <div className="careers-info">
            <div className="eyebrow">Join the Crew</div>
            <h2 style={{ fontSize: 'clamp(30px, 3.6vw, 44px)', margin: '14px 0 16px' }}>
              Build the future of enterprise software with us
            </h2>
            
            <p style={{ color: 'var(--slate-700)', fontSize: '16px', lineHeight: '1.65', marginBottom: '20px' }}>
              We are expanding our senior engineering rosters. We are looking for relentless builders in AI research, cloud infrastructure, and enterprise QA who want to solve hard architectural challenges for Fortune 500s and ambitious scaleups.
            </p>

            <div className="careers-benefits">
              {benefits.map((b, idx) => (
                <div key={idx} className="benefit-item">
                  {b.icon}
                  <span>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Open Positions List */}
          <div className="jobs-list">
            {CAREERS.map((job) => (
              <div
                key={job.id}
                className="job-card"
                onClick={() => onOpenJobModal(job)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') onOpenJobModal(job); }}
              >
                <div className="job-card-info">
                  <h4>{job.title}</h4>
                  <div className="job-meta-row">
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                    <span>•</span>
                    <span style={{ color: 'var(--blue-500)', fontWeight: 600 }}>{job.department}</span>
                  </div>
                </div>

                <div className="job-arrow-btn" aria-label={`Apply for ${job.title}`}>
                  <ArrowRight size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
