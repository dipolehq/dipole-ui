import { useState } from 'react';

import { OrbitingLogos } from '@components/effects/OrbitingLogos';

import { SPEEDUP_FEATURES, SPEEDUP_TABS, type SpeedupTab } from './content';

/**
 * Speedup section — tabbed feature list on the left, orbiting logos anchored
 * to the top-right corner of the section (hidden on mobile).
 */
export function Speedup() {
  const [activeTab, setActiveTab] = useState<SpeedupTab>('Engineering');

  return (
    <section className="relative w-full min-h-[60vh] lg:min-h-[calc(100vh-4rem)] py-12 sm:py-16 bg-brand-green overflow-hidden -mt-px">
      {/* Orbiting logos — hidden on mobile, visible on lg+ */}
      <div className="hidden lg:block absolute top-0 right-0 w-[55%] h-full pointer-events-none">
        <OrbitingLogos />
      </div>

      {/* Content */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-[2.5%]">
        <h2 className="m-0 mb-8 sm:mb-12 text-xl sm:text-2xl lg:text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-tight text-white tracking-tight">
          Speedup AI Adoption With Dipole
        </h2>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 sm:mb-12">
          {SPEEDUP_TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-medium rounded-full cursor-pointer transition-colors duration-200 border-none ${
                activeTab === tab
                  ? 'bg-white text-ink'
                  : 'bg-white/10 text-white/70 hover:bg-white/15'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Feature list */}
        <div className="flex flex-col gap-8 sm:gap-10 max-w-full lg:max-w-[620px]">
          {SPEEDUP_FEATURES[activeTab].map((feature) => (
            <div key={feature.title} className="flex items-start gap-4 sm:gap-6">
              {/* Checkmark icon */}
              <div className="shrink-0 flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-white/15">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
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
                <h3 className="m-0 mb-1.5 sm:mb-2 text-base sm:text-lg lg:text-[1.2rem] font-semibold text-white leading-snug">
                  {feature.title}
                </h3>
                <p className="m-0 text-sm sm:text-[0.92rem] font-light leading-relaxed text-white/55">
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
