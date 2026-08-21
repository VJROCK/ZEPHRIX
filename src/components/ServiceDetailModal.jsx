import React from 'react';
import { X, CheckCircle2, ArrowRight, Layers, Cpu, CheckSquare } from 'lucide-react';

export default function ServiceDetailModal({ service, onClose, onSelectForQuote }) {
  if (!service) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <div style={{ padding: '36px' }}>
          {/* Header */}
          <div style={{ marginBottom: '20px' }}>
            <span className="badge-pill cyan" style={{ marginBottom: '10px' }}>
              {service.badge}
            </span>
            <h2 style={{ fontSize: '28px', marginTop: '6px', color: 'var(--ink-900)' }}>
              {service.title}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--slate-700)', marginTop: '8px' }}>
              {service.shortDesc}
            </p>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--line)', margin: '20px 0' }} />

          {/* Deep Dive Description */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '16px', color: 'var(--ink-900)', marginBottom: '8px' }}>
              Strategic Overview
            </h4>
            <p style={{ fontSize: '14.5px', color: 'var(--slate-700)', lineHeight: '1.65' }}>
              {service.fullDesc}
            </p>
          </div>

          {/* Architecture Blueprint Card */}
          <div
            style={{
              background: 'linear-gradient(135deg, var(--ink-950), var(--ink-900))',
              borderRadius: 'var(--r-md)',
              padding: '20px',
              color: '#FFFFFF',
              marginBottom: '24px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--cyan-400)', marginBottom: '8px' }}>
              <Cpu size={18} />
              <b style={{ fontSize: '13.5px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Architecture &amp; Cloud Blueprint
              </b>
            </div>
            <p style={{ fontSize: '13.5px', color: '#CBD5E1', lineHeight: '1.55' }}>
              {service.architecture}
            </p>
          </div>

          {/* Deliverables Grid */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '16px', color: 'var(--ink-900)', marginBottom: '12px' }}>
              Key Enterprise Deliverables
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '13.5px',
                    color: 'var(--slate-700)',
                    background: 'var(--fog-50)',
                    padding: '10px 14px',
                    borderRadius: 'var(--r-sm)',
                    border: '1px solid var(--line)'
                  }}
                >
                  <CheckCircle2 size={16} style={{ color: 'var(--blue-500)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '14px', color: 'var(--slate-500)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
              Technologies &amp; Frameworks
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {service.tech.map((t, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '12.5px',
                    fontWeight: 600,
                    padding: '4px 12px',
                    borderRadius: 'var(--r-full)',
                    background: 'var(--fog-100)',
                    color: 'var(--slate-700)',
                    border: '1px solid var(--line)'
                  }}
                >
                  {t}
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
                if (onSelectForQuote) onSelectForQuote(service.title);
              }}
            >
              <span>Consult on {service.title}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
