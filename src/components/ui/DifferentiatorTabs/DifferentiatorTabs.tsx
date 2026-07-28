import { useState } from 'react';

import managementConsoleImg from '@assets/difference/management_console.png';
import mcpAuthdanceImg from '@assets/difference/mcp_authdance.png';
import dashboardImg from '@assets/difference/dashboard.svg';
import secretlessImg from '@assets/difference/secretless.png';

const TABS = ['Centralized Management Console', 'MCP Gateway', 'Zero Static Secrets', 'Complete Visibility'] as const;
type Tab = (typeof TABS)[number];

const FEATURES: Record<Tab, { title: string; description: string; image?: string }> = {
  'Centralized Management Console': {
    title: 'The Central Nervous System for Workload Access',
    description:
      'Every outbound connection from every agent and service flows through Dipole. You decide what talks to what, how it proves itself, and under what circumstances. Policies replace tribal knowledge. A single control surface replaces hundreds of scattered credentials managed by dozens of teams who forgot they created them.',
    image: managementConsoleImg,
  },
  'MCP Gateway': {
    title: 'AI Agents Get Their Own Security Boundary',
    description:
      'When Claude or Gemini calls a tool, the request passes through Dipole first. The human behind the agent authenticates once. From that point, Dipole issues isolated, per-user tokens for each downstream tool. The agent itself holds nothing useful. Revoke one user, one agent, or one tool independently. No shared credentials, no cross-contamination.',
    image: mcpAuthdanceImg,
  },
  'Zero Static Secrets': {
    title: 'Nothing to Leak Because Nothing Is Stored',
    description:
      'Credentials exist for the duration of a single request and vanish. They are never written to disk, never placed in environment variables, never committed to a repository. The attack surface of a leaked secret becomes zero when there is no secret to find. Your workloads authenticate by what they are, not by what they know.',
    image: secretlessImg,
  },
  'Complete Visibility': {
    title: 'Every Action Answered, Every Question Traceable',
    description:
      '"Which agent accessed production Snowflake at 2am?" Answered in seconds. Every policy decision, every credential issuance, every denial is logged with the full chain: which identity, which target, which policy matched, and who the human was if an agent was involved. Compliance stops being a quarterly scramble and becomes a live feed.',
    image: dashboardImg,
  },
};

export function DifferentiatorTabs() {
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]!);

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2 mb-16">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`inline-flex items-center gap-2 px-5 py-2.5 text-[0.9rem] font-medium rounded-full cursor-pointer transition-colors duration-200 border-none ${
              activeTab === tab
                ? 'bg-[#0b0d0e] text-white'
                : 'bg-[#f1f1f1] text-[#0b0d0e]/70 hover:bg-[#e5e5e5]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Feature content — fixed height so section doesn't shift between tabs */}
      <div className="flex items-start gap-10 h-[350px]">
        <div className="w-[35%] shrink-0">
          <h3 className="m-0 mb-4 text-[1.4rem] font-semibold text-[#0b0d0e] leading-[1.3] whitespace-nowrap">
            {FEATURES[activeTab].title}
          </h3>
          <p className="m-0 text-[0.92rem] font-light leading-[1.75] text-[#0b0d0e]/55">
            {FEATURES[activeTab].description}
          </p>
        </div>
        {/* Image area — always present with fixed size, shows image or empty */}
        <div className="flex-1 min-w-0 h-full flex items-center justify-end">
          {FEATURES[activeTab].image ? (
            <img
              src={FEATURES[activeTab].image}
              alt={FEATURES[activeTab].title}
              className="block max-w-full max-h-full object-contain"
              draggable={false}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
