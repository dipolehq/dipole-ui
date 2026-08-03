import { useState } from 'react';

import { FAQCard } from '@components/ui/FAQCard';
import { PricingCard } from '@components/ui/PricingCard';

import {
  AGENTIC_AI_PLANS,
  PRICING_FAQS,
  PRICING_TABS,
  WORKLOADS_PLANS,
  type PricingTab,
} from './content';

/**
 * Pricing page — off-white background with heading, subheading, tabbed
 * pricing cards (Agentic AI / Workloads), and an FAQ section.
 *
 * The navbar and footer come from `SiteLayout`.
 */
export function PricingPage() {
  const [activeTab, setActiveTab] = useState<PricingTab>('Agentic AI');

  const plans = activeTab === 'Agentic AI' ? AGENTIC_AI_PLANS : WORKLOADS_PLANS;

  return (
    <section className="relative w-full min-h-screen bg-[#f9f7f3] overflow-hidden">
      {/* mt-16 clears the fixed navbar; pt-10 is the heading's own breathing room. */}
      <div className="mt-16 pt-10 pb-20 px-[2.5%]">
        <h1 className="m-0 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] tracking-[-0.02em] text-[#0b0d0e]">
          Fair. Simple. Transparent.
        </h1>

        <p className="m-0 mt-5 max-w-[780px] text-[1rem] font-light leading-[1.7] text-[#0b0d0e]/65">
          Start now. Upgrade as you grow. Use Dipole to manage your AI agents, MCP servers, and workloads with secure access to on-prem, cloud, and external resources.
        </p>

        {/* Tabs */}
        <div className="mt-12 flex items-center gap-0 border-b border-[#0b0d0e]/10">
          {PRICING_TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`inline-flex items-center gap-2 px-5 py-3 text-[0.92rem] font-medium cursor-pointer border-none bg-transparent transition-colors duration-200 ${
                activeTab === tab
                  ? 'text-[#1C3B37] shadow-[inset_0_-2px_0_0_#1C3B37]'
                  : 'text-[#0b0d0e]/50 hover:text-[#0b0d0e]/80'
              }`}
            >
              {tab === 'Agentic AI' && (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.5 2a2.5 2.5 0 015 0M12 4.5V7" />
                  <path d="M8 21h8M12 17v4" />
                  <path d="M5 7h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z" />
                  <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none" />
                  <circle cx="15" cy="12" r="1" fill="currentColor" stroke="none" />
                </svg>
              )}
              {tab === 'Workloads' && (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="7" rx="2" />
                  <rect x="3" y="13" width="18" height="7" rx="2" />
                  <circle cx="7" cy="7.5" r="0.9" fill="currentColor" stroke="none" />
                  <circle cx="7" cy="16.5" r="0.9" fill="currentColor" stroke="none" />
                </svg>
              )}
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content — pricing cards */}
        <div className="mt-10">
          <div className="grid grid-cols-3 gap-6">
            {plans.map((plan) => (
              <PricingCard key={plan.plan} {...plan} />
            ))}
          </div>
        </div>

        {/* FAQ section */}
        <h2 className="m-0 mt-20 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] tracking-[-0.02em] text-[#0b0d0e]">
          Need Help Deciding?
        </h2>

        <div className="mt-10 flex items-start gap-8 max-w-[85%]">
          <div className="flex-1 min-w-0">
            {PRICING_FAQS.map((faq) => (
              <FAQCard key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* Contact card on the right */}
          <div className="w-[320px] shrink-0 sticky top-24 translate-x-30">
            <div className="p-8 rounded-2xl bg-[#1C3B37]">
              <h3 className="m-0 text-[1.15rem] font-semibold leading-[1.3] text-white">
                Still Have Some Question, We've Got You?
              </h3>
              <a
                href="#"
                className="w-[260px] inline-flex items-center gap-2 mt-5 px-5 py-2.5 text-[0.85rem] font-medium text-[#1C3B37] bg-white rounded-lg no-underline transition-opacity duration-200 hover:opacity-85"
              >
                Contact Us
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
