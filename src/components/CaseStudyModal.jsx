import React from 'react';
import { X, ArrowRight, CheckCircle2, Quote, Cpu } from 'lucide-react';

export default function CaseStudyModal({ caseStudy, onClose, onDiscussProject }) {
  if (!caseStudy) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close case study dialog"
        >
          <X size={20} />
        </button>

        <div style={{ padding: '36px' }}>
          {/* Header */}
          <div style={{ marginBottom: '22px' }}>
            <span className="badge-pill cyan" style={{ marginBottom: '10px' }}>
              {caseStudy.tag}
            </span>
            <h2 style={{ fontSize: '28px', marginTop: '6px', color: 'var(--ink-900)' }}>
              {caseStudy.title}
            </h2>
            <div style={{ fontSize: '14px', color: 'var(--slate-500)', fontWeight: 600, marginTop: '6px' }}>
              Client: {caseStudy.client}
            </div>
          </div>

          {/* Metric Highlights Banner */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              background: 'linear-gradient(135deg, var(--ink-950), var(--ink-900))',
              borderRadius: 'var(--r-md)',
              padding: '20px',
              color: '#FFFFFF',
              marginBottom: '26px'
            }}
          >
            {caseStudy.metrics.map((m, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: 900, color: 'var(--cyan-400)' }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '11.5px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Challenge & Solution Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
            <div style={{ background: 'var(--fog-50)', padding: '20px', borderRadius: 'var(--r-md)', border: '1px solid var(--line)' }}>
              <h4 style={{ fontSize: '15px', color: 'var(--ink-900)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>⚠️</span> The Enterprise Challenge
              </h4>
              <p style={{ fontSize: '13.5px', color: 'var(--slate-700)', lineHeight: '1.6' }}>
                {caseStudy.challenge}
              </p>
            </div>

            <div style={{ background: 'rgba(43, 92, 230, 0.04)', padding: '20px', borderRadius: 'var(--r-md)', border: '1px solid rgba(43, 92, 230, 0.2)' }}>
              <h4 style={{ fontSize: '15px', color: 'var(--blue-500)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Cpu size={16} /> Zephrix Solution
              </h4>
              <p style={{ fontSize: '13.5px', color: 'var(--slate-700)', lineHeight: '1.6' }}>
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Client Quote */}
          {caseStudy.quote && (
            <div
              style={{
                background: 'var(--fog-100)',
                borderLeft: '4px solid var(--blue-500)',
                borderRadius: '0 var(--r-md) var(--r-md) 0',
                padding: '16px 20px',
                marginBottom: '26px',
                fontStyle: 'italic',
                fontSize: '14px',
                color: 'var(--ink-800)',
                display: 'flex',
                gap: '12px'
              }}
            >
              <Quote size={24} style={{ color: 'var(--blue-500)', flexShrink: 0 }} />
              <div>"{caseStudy.quote}"</div>
            </div>
          )}

          {/* Tech Stack */}
          <div style={{ marginBottom: '28px' }}>
            <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--slate-400)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
              Technologies Deployed
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {caseStudy.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    padding: '4px 12px',
                    borderRadius: 'var(--r-full)',
                    background: 'var(--fog-100)',
                    color: 'var(--slate-700)',
                    border: '1px solid var(--line)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'flex-end', paddingTop: '16px', borderTop: '1px solid var(--line)' }}>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                onClose();
                if (onDiscussProject) onDiscussProject(caseStudy.title);
              }}
            >
              <span>Discuss Similar Project</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
