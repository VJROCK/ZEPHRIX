import React from 'react';
import { TESTIMONIALS } from '../data/websiteData';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" aria-label="Client Testimonials and Reviews">
      <div className="wrap">
        <div className="sec-head center">
          <div className="eyebrow">Client Endorsements</div>
          <h2>Trusted by engineering leaders who ship with urgency</h2>
          <p>
            Here is what CTOs, product managers, and enterprise directors say about collaborating with Zephrix Technologies.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((item, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(item.rating)].map((_, sIdx) => (
                  <Star key={sIdx} size={16} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>

              <p className="testimonial-quote">
                "{item.quote}"
              </p>

              <div className="testimonial-author-box">
                <div
                  className="author-avatar"
                  style={{ background: item.color }}
                >
                  {item.avatar}
                </div>
                <div className="author-info">
                  <b>{item.author}</b>
                  <span>{item.role} · {item.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
