import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Upload, Briefcase, MapPin, DollarSign, Clock } from 'lucide-react';

export default function JobApplyModal({ job, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolio: '',
    coverNote: '',
    resumeFile: null
  });

  if (!job) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close job application modal"
        >
          <X size={20} />
        </button>

        <div style={{ padding: '36px' }}>
          {/* Header */}
          <div style={{ marginBottom: '20px' }}>
            <span className="badge-pill" style={{ marginBottom: '10px' }}>
              {job.department}
            </span>
            <h2 style={{ fontSize: '28px', marginTop: '6px', color: 'var(--ink-900)' }}>
              {job.title}
            </h2>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '10px', fontSize: '13.5px', color: 'var(--slate-500)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={15} /> {job.location}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={15} /> {job.type}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <DollarSign size={15} /> {job.salary}
              </span>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--line)', margin: '20px 0' }} />

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '30px 20px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: '#10B981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}
              >
                <CheckCircle2 size={36} />
              </div>
              <h3 style={{ fontSize: '24px', marginBottom: '10px', color: 'var(--ink-900)' }}>
                Application Received!
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--slate-700)', maxWidth: '440px', margin: '0 auto 24px' }}>
                Thank you for applying for the <b>{job.title}</b> role at Zephrix Technologies. Our engineering hiring team will review your credentials and contact you within 2-3 business days.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onClose}
              >
                Done
              </button>
            </div>
          ) : (
            <>
              {/* Job Details Overview */}
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '15px', color: 'var(--ink-900)', marginBottom: '8px' }}>
                  Role Overview
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--slate-700)', lineHeight: '1.6' }}>
                  {job.desc}
                </p>
              </div>

              {/* Responsibilities & Requirements */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '28px' }}>
                <div style={{ background: 'var(--fog-50)', padding: '16px', borderRadius: 'var(--r-md)', border: '1px solid var(--line)' }}>
                  <h5 style={{ fontSize: '13.5px', color: 'var(--ink-900)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                    Key Responsibilities
                  </h5>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {job.responsibilities.map((r, idx) => (
                      <li key={idx} style={{ fontSize: '12.5px', color: 'var(--slate-700)', display: 'flex', gap: '8px' }}>
                        <span style={{ color: 'var(--blue-500)' }}>•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ background: 'var(--fog-50)', padding: '16px', borderRadius: 'var(--r-md)', border: '1px solid var(--line)' }}>
                  <h5 style={{ fontSize: '13.5px', color: 'var(--ink-900)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                    Requirements
                  </h5>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {job.requirements.map((req, idx) => (
                      <li key={idx} style={{ fontSize: '12.5px', color: 'var(--slate-700)', display: 'flex', gap: '8px' }}>
                        <span style={{ color: 'var(--cyan-500)' }}>•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Application Form */}
              <form onSubmit={handleSubmit}>
                <h4 style={{ fontSize: '16px', color: 'var(--ink-900)', marginBottom: '16px' }}>
                  Submit Your Application
                </h4>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>LinkedIn or GitHub URL *</label>
                    <input
                      type="url"
                      required
                      placeholder="https://linkedin.com/in/..."
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Brief Introduction / Why Zephrix?</label>
                  <textarea
                    placeholder="Tell us briefly about your engineering background and standout projects..."
                    value={formData.coverNote}
                    onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                    rows={3}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Attach Resume / CV (PDF or DOCX)</label>
                  <div
                    style={{
                      border: '2px dashed var(--line)',
                      borderRadius: 'var(--r-md)',
                      padding: '20px',
                      textAlign: 'center',
                      background: 'var(--fog-50)',
                      cursor: 'pointer'
                    }}
                    onClick={() => document.getElementById('resume-file-input').click()}
                  >
                    <Upload size={24} style={{ color: 'var(--blue-500)', margin: '0 auto 8px' }} />
                    <div style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--ink-900)' }}>
                      {formData.resumeFile ? formData.resumeFile.name : 'Click to select or drag resume file'}
                    </div>
                    <div style={{ fontSize: '11.5px', color: 'var(--slate-400)', marginTop: '4px' }}>
                      PDF, DOCX up to 10MB
                    </div>
                    <input
                      id="resume-file-input"
                      type="file"
                      style={{ display: 'none' }}
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setFormData({ ...formData, resumeFile: e.target.files[0] });
                        }
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', justifyContent: 'flex-end', marginTop: '24px' }}>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    <span>Submit Application</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
