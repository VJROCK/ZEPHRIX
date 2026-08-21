import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/websiteData';
import { Mail, MapPin, Globe, Clock, CheckCircle2, ArrowRight, PhoneCall, Send } from 'lucide-react';

export default function Contact({ preselectedService }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    roleCategory: 'Enterprise Client',
    service: preselectedService || 'AI Product Development',
    timeline: '1-3 Months',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" aria-label="Contact and Discovery Call">
      <div className="wrap">
        <div className="contact-grid">
          {/* Left Column: Direct Info & Guarantees */}
          <div className="contact-info">
            <div className="eyebrow">Start a Conversation</div>
            <h2>Let's build something that moves fast</h2>
            <p>
              Tell us about your project, your timeline, or your enterprise architecture challenges. Whether you are modernizing core systems or shipping new AI products, we will respond within one business day.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <Mail size={22} />
                </div>
                <div>
                  <b>Email Inquiries</b>
                  <span>{COMPANY_INFO.email}</span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <MapPin size={22} />
                </div>
                <div>
                  <b>Headquarters</b>
                  <span>{COMPANY_INFO.headquarters}</span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <Globe size={22} />
                </div>
                <div>
                  <b>Delivery Presence</b>
                  <span>{COMPANY_INFO.reach}</span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <Clock size={22} />
                </div>
                <div>
                  <b>Response Time Guarantee</b>
                  <span>&lt; 24 Hours SLA on all discovery requests</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#10B981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px'
                  }}
                >
                  <CheckCircle2 size={40} />
                </div>
                <h3 style={{ fontSize: '24px', marginBottom: '12px', color: 'var(--ink-900)' }}>
                  Discovery Request Received!
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--slate-700)', lineHeight: '1.6', maxWidth: '420px', margin: '0 auto 28px' }}>
                  Thank you, <b>{formData.fullName}</b>. A Zephrix Principal Architect has received your project briefing and will follow up at <b>{formData.email}</b> within 24 hours.
                </p>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      company: '',
                      roleCategory: 'Enterprise Client',
                      service: 'AI Product Development',
                      timeline: '1-3 Months',
                      message: ''
                    });
                  }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '22px', marginBottom: '20px', color: 'var(--ink-900)' }}>
                  Request Discovery &amp; Architecture Review
                </h3>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Company / Organization</label>
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>I Am A...</label>
                    <select
                      value={formData.roleCategory}
                      onChange={(e) => setFormData({ ...formData, roleCategory: e.target.value })}
                    >
                      <option value="Enterprise Client">Enterprise Client</option>
                      <option value="High-Growth Startup">High-Growth Startup</option>
                      <option value="Media / Publishing House">Media / Publishing House</option>
                      <option value="Investor / Strategic Partner">Investor / Strategic Partner</option>
                      <option value="Job Seeker">Job Seeker</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Primary Need / Capability</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="AI Product Development">AI Product Development</option>
                      <option value="ERP Support & Development">ERP Support &amp; Development</option>
                      <option value="QA Tool Solutions & Automation">QA Tool Solutions &amp; Automation</option>
                      <option value="Media House Support & Platforms">Media House Support &amp; Platforms</option>
                      <option value="Cloud & Onprem Support">Cloud &amp; Onprem Support (AWS/Azure)</option>
                      <option value="Technical Guidance & Architecture">Technical Guidance &amp; Architecture</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Target Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    >
                      <option value="Immediate (< 1 Month)">Immediate (&lt; 1 Month)</option>
                      <option value="1-3 Months">1-3 Months</option>
                      <option value="3-6 Months">3-6 Months</option>
                      <option value="Exploratory / Ongoing Advisory">Exploratory / Advisory</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Project Details / Architecture Scope *</label>
                  <textarea
                    required
                    placeholder="Describe your current tech stack, key bottlenecks, or product vision..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Send size={16} />
                  <span>Send Discovery Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
