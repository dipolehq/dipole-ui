import { useState } from 'react';

import {
  DIFFERENTIATORS,
  DIFFERENTIATOR_TABS,
  type DifferentiatorTab,
} from './content';

/**
 * Tabbed differentiator browser: pill selector on top, with the active entry's
 * copy on the left and its diagram on the right.
 */
export function DifferentiatorTabs() {
  const [activeTab, setActiveTab] = useState<DifferentiatorTab>(DIFFERENTIATOR_TABS[0]);

  const active = DIFFERENTIATORS[activeTab];

  return (
    <div className="h-full flex flex-col">
      {/* Tabs */}
      <div className="flex gap-2 mb-10">
        {DIFFERENTIATOR_TABS.map((tab) => (
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

      {/* Feature content — fills remaining space */}
      <div className="flex items-start gap-10 flex-1 min-h-0">
        <div className="w-[35%] shrink-0">
          <h3 className="m-0 mb-4 text-[1.4rem] font-semibold text-[#0b0d0e] leading-[1.3] whitespace-nowrap">
            {active.title}
          </h3>
          <p className="m-0 text-[0.92rem] font-light leading-[1.75] text-[#0b0d0e]/55">
            {active.description}
          </p>
          {active.highlight && (
            <p className="m-0 mt-4 text-[0.92rem] font-normal leading-[1.75] text-[#0b0d0e]/85">
              {active.highlight}
            </p>
          )}
        </div>
        {/* Fixed image frame. Every tab's diagram renders into this same box and
            is scaled to fit it, so switching tabs never shifts the layout. */}
        <div className="flex-1 min-w-0 h-full">
          {active.image ? (
            <img
              src={active.image}
              alt={active.title}
              className="block w-full h-full object-contain object-center pointer-events-none select-none"
              draggable={false}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
