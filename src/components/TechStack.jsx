import React, { useState } from 'react';
import { TECH_STACK } from '../data/websiteData';
import { Cloud, Sparkles, Code2, ShieldCheck, Check } from 'lucide-react';

export default function TechStack() {
  const [searchTerm, setSearchTerm] = useState('');

  const stackCategories = [
    { key: 'cloud', title: 'Cloud & Infrastructure', icon: <Cloud size={16} />, items: TECH_STACK.cloud },
    { key: 'ai', title: 'AI, GenAI & Data', icon: <Sparkles size={16} />, items: TECH_STACK.ai },
    { key: 'dev', title: 'Full-Stack Development', icon: <Code2 size={16} />, items: TECH_STACK.dev },
    { key: 'erp_qa', title: 'Enterprise ERP & QA Tooling', icon: <ShieldCheck size={16} />, items: TECH_STACK.erp_qa }
  ];

  return (
    <section id="stack" aria-label="Technology Stack and Cloud Partners">
      <div className="wrap">
        <div className="sec-head center">
          <div className="eyebrow">Tech Stack &amp; Ecosystem</div>
          <h2>The modern toolchain we build next-generation software with</h2>
          <p>
            We leverage battle-tested cloud platforms, leading AI foundational models, and high-performance open source frameworks.
          </p>
        </div>

        {/* 4-Grid Categorized Tech Matrix */}
        <div className="stack-grid">
          {stackCategories.map((cat) => {
            const filteredItems = cat.items.filter((item) =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            return (
              <div key={cat.key} className="stack-card">
                <div className="stack-card-title">
                  {cat.icon}
                  <span>{cat.title}</span>
                </div>

                <div className="stack-chips-list">
                  {filteredItems.map((item, idx) => (
                    <div key={idx} className="stack-chip" title={item.level}>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Partners Banner */}
        <div className="partners-banner">
          <div className="partners-label">
            Partner Ecosystem &amp; Cloud Alliances:
          </div>

          <div className="partners-logos">
            <div className="partner-logo-item">
              AWS <span>Partner</span>
            </div>
            <div className="partner-logo-item">
              Microsoft <span>Azure</span>
            </div>
            <div className="partner-logo-item">
              Git<span>Hub</span>
            </div>
            <div className="partner-logo-item">
              <span>Docker</span>
            </div>
            <div className="partner-logo-item">
              <span>Figma</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
