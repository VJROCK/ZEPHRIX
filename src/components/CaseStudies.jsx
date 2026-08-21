import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/websiteData';
import { ArrowRight, ExternalLink, TrendingUp, Sparkles } from 'lucide-react';

export default function CaseStudies({ onOpenCaseModal }) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterOptions = ['All', 'QA & Testing', 'ERP Modernization', 'AI & ML', 'Cloud & Media'];

  const filteredCases = selectedFilter === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.category === selectedFilter);

  const getHeaderClass = (idx) => {
    const classes = ['c1', 'c2', 'c3', 'c4'];
    return classes[idx % classes.length];
  };

  return (
    <section id="work" aria-label="Featured Case Studies & Work">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Selected Work &amp; Case Studies</div>
          <h2>Measurable enterprise outcomes, not just deliverables</h2>
          <p>
            Explore how Zephrix engineering translates technical architecture into accelerated release cycles, reduced total cost of ownership, and scalable AI infrastructure.
          </p>
        </div>

        {/* Filters */}
        <div className="case-filter-bar">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              className={`tab-btn ${selectedFilter === opt ? 'active' : ''}`}
              onClick={() => setSelectedFilter(opt)}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="case-grid">
          {filteredCases.map((cs, idx) => (
            <article key={cs.id} className="case-card">
              <div className={`case-card-header ${getHeaderClass(idx)}`}>
                <span className="case-card-tag">{cs.tag}</span>
                <h3>{cs.title}</h3>
                <div className="case-card-client">{cs.client}</div>
              </div>

              <div className="case-card-body">
                <p className="case-card-summary">{cs.summary}</p>

                <div className="case-metrics-grid">
                  {cs.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="case-metric">
                      <div className="v">{m.value}</div>
                      <div className="k">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="case-card-actions">
                  <button
                    type="button"
                    className="service-learn-more"
                    onClick={() => onOpenCaseModal(cs)}
                  >
                    <span>View Case Study Breakdown</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
