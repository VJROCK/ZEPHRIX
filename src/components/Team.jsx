import React from 'react';
import { TEAM_MEMBERS } from '../data/websiteData';

export default function Team() {
  return (
    <section id="team" className="sec-alt" aria-label="Leadership and Engineering Team">
      <div className="wrap">
        <div className="sec-head center">
          <div className="eyebrow">Leadership &amp; Specialized Practices</div>
          <h2>Engineers and architects who have shipped at enterprise scale</h2>
          <p>
            Our leadership combines decades of experience across distributed cloud engineering, AI research, and mission-critical enterprise systems.
          </p>
        </div>

        <div className="team-grid">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="team-card">
              <div
                className="team-avatar"
                style={{ background: member.gradient }}
              >
                {member.avatar}
              </div>

              <h4>{member.name}</h4>
              <div className="team-role">{member.role}</div>
              <p className="team-bio">{member.bio}</p>

              <div className="team-tags">
                {member.tags.map((t, tIdx) => (
                  <span key={tIdx} className="team-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
