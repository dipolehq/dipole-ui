import { useState } from 'react';

import {
  DIFFERENTIATORS,
  DIFFERENTIATOR_TABS,
  type DifferentiatorTab,
} from './content';

/**
 * Tabbed differentiator browser: pill selector on top, with the active entry's
 * copy on the left and its diagram on the right.
 *
 * Content slides directionally when switching tabs — same effect as the
 * morphing navbar dropdown.
 */
export function DifferentiatorTabs() {
  const [activeTab, setActiveTab] = useState<DifferentiatorTab>(DIFFERENTIATOR_TABS[0]);
  const [shouldSlide, setShouldSlide] = useState(false);

  const activeIndex = DIFFERENTIATOR_TABS.indexOf(activeTab);

  const handleTabClick = (tab: DifferentiatorTab) => {
    const newIndex = DIFFERENTIATOR_TABS.indexOf(tab);
    if (newIndex !== activeIndex) {
      setShouldSlide(true);
    }
    setActiveTab(tab);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Tabs */}
      <div className="flex gap-2 mb-10">
        {DIFFERENTIATOR_TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => handleTabClick(tab)}
            className={`inline-flex items-center gap-2 px-5 py-2.5 text-[0.9rem] font-medium rounded-full cursor-pointer transition-colors duration-200 border-none ${
              activeTab === tab
                ? 'bg-[#1C3B37] text-white'
                : 'bg-[#f1f1f1] text-[#0b0d0e]/70 hover:bg-[#e5e5e5]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Feature content — fills remaining space, overflow hidden for slide */}
      <div className="flex-1 min-h-0 relative overflow-hidden">
        {DIFFERENTIATOR_TABS.map((tab, index) => {
          const isCurrent = index === activeIndex;
          const entry = DIFFERENTIATORS[tab];

          let transform = 'translateX(0)';
          if (!isCurrent) {
            transform = index < activeIndex ? 'translateX(-30%)' : 'translateX(30%)';
          }

          return (
            <div
              key={tab}
              style={{
                transform,
                transition: shouldSlide
                  ? 'transform 450ms cubic-bezier(0.25, 0.1, 0.25, 1), opacity 350ms cubic-bezier(0.25, 0.1, 0.25, 1)'
                  : 'none',
              }}
              className={`${
                isCurrent ? 'relative' : 'absolute inset-0'
              } ${isCurrent ? 'opacity-100' : 'opacity-0'} h-full`}
              onTransitionEnd={() => setShouldSlide(false)}
            >
              <div className="flex items-start gap-10 h-full">
                <div className="w-[35%] shrink-0">
                  <h3 className="m-0 mb-4 text-[1.4rem] font-semibold text-[#0b0d0e] leading-[1.3] whitespace-nowrap">
                    {entry.title}
                  </h3>
                  <p className="m-0 text-[0.92rem] font-light leading-[1.75] text-[#0b0d0e]/55">
                    {entry.description}
                  </p>
                  {entry.highlight && (
                    <p className="m-0 mt-4 text-[0.92rem] font-normal leading-[1.75] text-[#0b0d0e]/85">
                      {entry.highlight}
                    </p>
                  )}
                </div>

                <div className="flex-1 min-w-0 h-full">
                  {entry.image ? (
                    <img
                      src={entry.image}
                      alt={entry.title}
                      className="block w-full h-full object-contain object-center pointer-events-none select-none"
                      draggable={false}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
