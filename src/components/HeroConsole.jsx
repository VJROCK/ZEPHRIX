import React, { useState, useEffect } from 'react';
import { Bot, Layers, CheckCircle2, Film, Cloud, Activity, Terminal } from 'lucide-react';

export default function HeroConsole({ onSelectService }) {
  const [activeTab, setActiveTab] = useState('ai');
  const [telemetryTick, setTelemetryTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTelemetryTick((prev) => (prev + 1) % 100);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const consoleRows = [
    {
      id: 'ai',
      serviceId: 'ai-product-dev',
      name: 'AI Product Engine',
      sub: 'RAG & Bedrock / OpenAI Copilots',
      icon: <Bot size={16} />,
      iconBg: 'rgba(43, 92, 230, 0.25)',
      iconColor: '#4D7BFF',
      badge: 'LIVE',
      badgeBg: 'rgba(16, 185, 129, 0.15)',
      badgeColor: '#34D399',
      latency: '24ms',
      throughput: '12.4k req/s',
      nodes: '64 Vector Pods'
    },
    {
      id: 'erp',
      serviceId: 'erp-modernization',
      name: 'ERP Modernization',
      sub: 'SAP & Azure Synced Pipeline',
      icon: <Layers size={16} />,
      iconBg: 'rgba(22, 181, 208, 0.25)',
      iconColor: '#26D5F2',
      badge: 'DEPLOYED',
      badgeBg: 'rgba(16, 185, 129, 0.15)',
      badgeColor: '#34D399',
      latency: '45ms',
      throughput: '100% sync',
      nodes: 'Azure Dedicated'
    },
    {
      id: 'qa',
      serviceId: 'qa-tool-solutions',
      name: 'QA Automation Suite',
      sub: 'Playwright & Visual Diff Matrix',
      icon: <CheckCircle2 size={16} />,
      iconBg: 'rgba(30, 134, 219, 0.25)',
      iconColor: '#38BDF8',
      badge: 'PASSING',
      badgeBg: 'rgba(16, 185, 129, 0.15)',
      badgeColor: '#34D399',
      latency: '1.2s avg',
      throughput: '500+ tests/m',
      nodes: 'Zero Defects'
    },
    {
      id: 'media',
      serviceId: 'media-house-support',
      name: 'Media House Platform',
      sub: 'Global Edge CDN & DAM',
      icon: <Film size={16} />,
      iconBg: 'rgba(77, 123, 255, 0.25)',
      iconColor: '#818CF8',
      badge: 'SCALING',
      badgeBg: 'rgba(245, 158, 11, 0.18)',
      badgeColor: '#FBBF24',
      latency: '38ms',
      throughput: '1.2M Viewers',
      nodes: 'Edge Distributed'
    },
    {
      id: 'cloud',
      serviceId: 'cloud-onprem-support',
      name: 'Cloud Support Desk',
      sub: 'AWS & Azure 24/7 Managed NOC',
      icon: <Cloud size={16} />,
      iconBg: 'rgba(22, 181, 208, 0.25)',
      iconColor: '#00F0FF',
      badge: '24/7 SLA',
      badgeBg: 'rgba(16, 185, 129, 0.15)',
      badgeColor: '#34D399',
      latency: '< 15min SLA',
      throughput: '99.99% Uptime',
      nodes: 'Multi-Region'
    }
  ];

  const currentActive = consoleRows.find((r) => r.id === activeTab) || consoleRows[0];

  return (
    <div className="console-panel">
      {/* Console Head */}
      <div className="console-header">
        <div className="console-dots">
          <span className="console-dot" style={{ background: '#FF5F57' }}></span>
          <span className="console-dot" style={{ background: '#FEBC2E' }}></span>
          <span className="console-dot" style={{ background: '#28C840' }}></span>
          <span className="console-title" style={{ marginLeft: '6px' }}>
            zephrix — delivery console v2.6
          </span>
        </div>
        <div className="console-status-pill">
          <Activity size={12} />
          <span>ALL SYSTEMS NOMINAL</span>
        </div>
      </div>

      {/* Console Interactive Rows */}
      <div className="console-rows">
        {consoleRows.map((row) => {
          const isCurrent = row.id === activeTab;
          return (
            <div
              key={row.id}
              className={`console-row ${isCurrent ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(row.id);
                if (onSelectService) onSelectService(row.serviceId);
              }}
              title="Click to inspect architecture & telemetry"
            >
              <div className="console-service-info">
                <div
                  className="console-icon"
                  style={{ background: row.iconBg, color: row.iconColor }}
                >
                  {row.icon}
                </div>
                <div>
                  <div className="console-name">{row.name}</div>
                  <div className="console-sub">{row.sub}</div>
                </div>
              </div>
              <span
                className="console-tag"
                style={{ background: row.badgeBg, color: row.badgeColor }}
              >
                {row.badge}
              </span>
            </div>
          );
        })}
      </div>

      {/* Telemetry Detail Drawer */}
      <div className="console-telemetry">
        <div className="telemetry-item">
          <span>Latency:</span>
          <b>{currentActive.latency}</b>
        </div>
        <div className="telemetry-item">
          <span>Throughput:</span>
          <b>{currentActive.throughput}</b>
        </div>
        <div className="telemetry-item">
          <span>Cluster:</span>
          <b>{currentActive.nodes}</b>
        </div>
      </div>
    </div>
  );
}
