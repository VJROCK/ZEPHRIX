import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight, Video, Sparkles } from 'lucide-react';

export default function ScheduleModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState('AI Product Blueprinting');
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });

  if (!isOpen) return null;

  const sampleSlots = [
    { day: 'Tomorrow', time: '10:00 AM MST', id: 'slot-1' },
    { day: 'Tomorrow', time: '2:30 PM MST', id: 'slot-2' },
    { day: 'Wednesday', time: '11:00 AM MST', id: 'slot-3' },
    { day: 'Thursday', time: '1:00 PM MST', id: 'slot-4' }
  ];

  const topics = [
    'AI Product Blueprinting & RAG',
    'ERP Cloud Migration Strategy',
    'QA Test Automation Audit',
    'AWS / Azure Cost & Architecture Review',
    'Custom Engineering & Staff Augmentation'
  ];

  const handleConfirm = (e) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close scheduler"
        >
          <X size={20} />
        </button>

        <div style={{ padding: '36px' }}>
          {step === 1 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--blue-500)', marginBottom: '8px' }}>
                <Video size={18} />
                <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  30-Minute Architecture Session
                </span>
              </div>
              <h2 style={{ fontSize: '26px', color: 'var(--ink-900)', marginBottom: '8px' }}>
                Book a Technical Discovery Call
              </h2>
              <p style={{ fontSize: '14.5px', color: 'var(--slate-700)', marginBottom: '24px' }}>
                Directly discuss technical requirements with a Zephrix Principal Architect.
              </p>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontSize: '12.5px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ink-900)', display: 'block', marginBottom: '10px' }}>
                  Select Consultation Focus:
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {topics.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTopic(t)}
                      style={{
                        padding: '12px 16px',
                        borderRadius: 'var(--r-md)',
                        border: selectedTopic === t ? '1.5px solid var(--blue-500)' : '1px solid var(--line)',
                        background: selectedTopic === t ? 'rgba(43, 92, 230, 0.06)' : 'var(--fog-50)',
                        color: selectedTopic === t ? 'var(--blue-500)' : 'var(--ink-900)',
                        fontWeight: selectedTopic === t ? 600 : 500,
                        fontSize: '14px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span>{t}</span>
                      {selectedTopic === t && <Sparkles size={16} />}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label style={{ fontSize: '12.5px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ink-900)', display: 'block', marginBottom: '10px' }}>
                  Select Preferred Time Slot:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {sampleSlots.map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => setSelectedSlot(slot.id)}
                      style={{
                        padding: '12px',
                        borderRadius: 'var(--r-sm)',
                        border: selectedSlot === slot.id ? '1.5px solid var(--blue-500)' : '1px solid var(--line)',
                        background: selectedSlot === slot.id ? 'rgba(43, 92, 230, 0.08)' : '#FFFFFF',
                        color: selectedSlot === slot.id ? 'var(--blue-500)' : 'var(--ink-900)',
                        cursor: 'pointer',
                        textAlign: 'center',
                        fontSize: '13px'
                      }}
                    >
                      <div style={{ fontWeight: 700 }}>{slot.day}</div>
                      <div style={{ color: 'var(--slate-500)', fontSize: '12px' }}>{slot.time}</div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                disabled={!selectedSlot}
                onClick={() => setStep(2)}
              >
                <span>Continue to Details</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleConfirm}>
              <h2 style={{ fontSize: '24px', color: 'var(--ink-900)', marginBottom: '8px' }}>
                Your Contact Information
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--slate-700)', marginBottom: '20px' }}>
                We'll send the Google Meet invitation &amp; calendar invite to your inbox.
              </p>

              <div className="form-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="work@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Company / Organization *</label>
                <input
                  type="text"
                  required
                  placeholder="Organization name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setStep(1)}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ flexGrow: 1, justifyContent: 'center' }}
                >
                  <span>Confirm Discovery Call</span>
                  <CheckCircle2 size={16} />
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
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
                  margin: '0 auto 16px'
                }}
              >
                <CheckCircle2 size={36} />
              </div>
              <h3 style={{ fontSize: '24px', marginBottom: '8px', color: 'var(--ink-900)' }}>
                Session Confirmed!
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--slate-700)', lineHeight: '1.6', marginBottom: '24px' }}>
                A calendar invitation with video bridge has been dispatched to <b>{formData.email}</b> for topic <b>"{selectedTopic}"</b>.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onClose}
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
