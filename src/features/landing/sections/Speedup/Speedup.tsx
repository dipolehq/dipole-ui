import { useState } from 'react';

import { OrbitingLogos } from '@components/effects/OrbitingLogos';

import { SPEEDUP_FEATURES, SPEEDUP_TABS, type SpeedupTab } from './content';

/**
 * Speedup section — tabbed feature list on the left, orbiting logos anchored
 * to the top-right corner of the section.
 */
export function Speedup() {
  const [activeTab, setActiveTab] = useState<SpeedupTab>('Engineering');

  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] py-16 bg-[#0b0d0e] overflow-hidden -mt-px">
      {/* Orbiting logos — absolutely positioned to section's top-right corner */}
      <div className="absolute top-0 right-0 w-[55%] h-full pointer-events-none">
        <OrbitingLogos />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-full mx-auto px-[2.5%]">
        <h2 className="m-0 mb-12 text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.2] text-white tracking-[-0.02em]">
          Speedup AI Adoption With Dipole
        </h2>

        {/* Tabs */}
        <div className="flex gap-2 mb-12">
          {SPEEDUP_TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-[0.9rem] font-medium rounded-full cursor-pointer transition-colors duration-200 border-none ${
                activeTab === tab
                  ? 'bg-white text-[#0b0d0e]'
                  : 'bg-white/10 text-white/70 hover:bg-white/15'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Feature list */}
        <div className="flex flex-col gap-10 max-w-[620px]">
          {SPEEDUP_FEATURES[activeTab].map((feature) => (
            <div key={feature.title} className="flex items-start gap-6">
              {/* Checkmark icon */}
              <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full border-2 border-white/15">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              {/* Text */}
              <div>
                <h3 className="m-0 mb-2 text-[1.2rem] font-semibold text-white leading-[1.3]">
                  {feature.title}
                </h3>
                <p className="m-0 text-[0.92rem] font-light leading-[1.75] text-white/55">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
