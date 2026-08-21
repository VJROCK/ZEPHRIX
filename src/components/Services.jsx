import React, { useState } from 'react';
import { SERVICES } from '../data/websiteData';
import { Bot, Layers, CheckCircle2, Film, Cloud, Lightbulb, ArrowRight, Check } from 'lucide-react';

export default function Services({ onOpenServiceModal }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'ai', label: 'AI & Data Products' },
    { id: 'enterprise', label: 'Enterprise & ERP' },
    { id: 'qa', label: 'QA & Automation' },
    { id: 'cloud', label: 'Cloud & Onprem' }
  ];

  const getServiceIcon = (id) => {
    switch (id) {
      case 'ai-product-dev':
        return <Bot size={26} />;
      case 'erp-modernization':
        return <Layers size={26} />;
      case 'qa-tool-solutions':
        return <CheckCircle2 size={26} />;
      case 'media-house-support':
        return <Film size={26} />;
      case 'cloud-onprem-support':
        return <Cloud size={26} />;
      case 'technical-guidance':
        return <Lightbulb size={26} />;
      default:
        return <Layers size={26} />;
    }
  };

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory || (activeCategory === 'cloud' && (s.category === 'cloud' || s.category === 'media')));

  return (
    <section id="services" aria-label="Our Engineering Services">
      <div className="wrap">
        <div className="sec-head center">
          <div className="eyebrow">Core Engineering Capabilities</div>
          <h2>Six ways Zephrix powers your engineering roadmap</h2>
          <p>
            From production AI agents to resilient on-premise ERP modernizations, every engagement is delivered by senior architects and backed by cloud-native design principles.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="services-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="services-grid">
          {filteredServices.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-head">
                <div className="service-icon">
                  {getServiceIcon(service.id)}
                </div>
                <span className="badge-pill">
                  {service.badge}
                </span>
              </div>

              <h3>{service.title}</h3>
              <p className="desc">{service.shortDesc}</p>

              <ul className="service-points">
                {service.points.slice(0, 3).map((pt, idx) => (
                  <li key={idx} className="service-point">
                    <Check size={16} className="service-point-check" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="service-footer">
                <button
                  type="button"
                  className="service-learn-more"
                  onClick={() => onOpenServiceModal(service)}
                >
                  <span>Architecture &amp; Specs</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
