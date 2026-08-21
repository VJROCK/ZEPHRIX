import React from 'react';
import { INDUSTRIES } from '../data/websiteData';
import {
  Landmark, Activity, ShoppingBag, Film, Factory, GraduationCap,
  Truck, Zap, Building2, Radio, Home, Plane
} from 'lucide-react';

export default function Industries() {
  const getIndustryIcon = (iconName) => {
    const props = { size: 22 };
    switch (iconName) {
      case 'Landmark': return <Landmark {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'ShoppingBag': return <ShoppingBag {...props} />;
      case 'Film': return <Film {...props} />;
      case 'Factory': return <Factory {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'Truck': return <Truck {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Building2': return <Building2 {...props} />;
      case 'Radio': return <Radio {...props} />;
      case 'Home': return <Home {...props} />;
      case 'Plane': return <Plane {...props} />;
      default: return <Building2 {...props} />;
    }
  };

  return (
    <section id="industries" className="sec-alt" aria-label="Industries We Serve">
      <div className="wrap">
        <div className="sec-head center">
          <div className="eyebrow">Industries Served</div>
          <h2>Deep domain expertise across regulated &amp; fast-moving sectors</h2>
          <p>
            Whether meeting strict financial and healthcare compliance or supporting high-concurrency retail and media launches, our solutions adapt to your industry standards.
          </p>
        </div>

        <div className="industries-grid">
          {INDUSTRIES.map((ind) => (
            <div key={ind.id} className="industry-card">
              <div className="industry-icon-box">
                {getIndustryIcon(ind.icon)}
              </div>
              <h4>{ind.name}</h4>
              <p>{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
