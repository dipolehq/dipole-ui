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
 * Content slides directionally when switching tabs.
 * Mobile: stacks vertically (text above image).
 * Desktop: side-by-side 35/65 split.
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
      {/* Tabs — horizontally scrollable on mobile */}
      <div className="flex gap-2 mb-6 sm:mb-10 overflow-x-auto pb-1">
        {DIFFERENTIATOR_TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => handleTabClick(tab)}
            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-full cursor-pointer transition-colors duration-200 border-none whitespace-nowrap ${
              activeTab === tab
                ? 'bg-brand-green text-white'
                : 'bg-[#f1f1f1] text-ink/70 hover:bg-[#e5e5e5]'
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
              <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10 h-full">
                <div className="w-full lg:w-[35%] shrink-0">
                  <h3 className="m-0 mb-3 sm:mb-4 text-lg sm:text-xl lg:text-[1.4rem] font-semibold text-ink leading-snug">
                    {entry.title}
                  </h3>
                  <p className="m-0 text-sm sm:text-[0.92rem] font-light leading-relaxed text-ink/55">
                    {entry.description}
                  </p>
                  {entry.highlight && (
                    <p className="m-0 mt-3 sm:mt-4 text-sm sm:text-[0.92rem] font-normal leading-relaxed text-ink/85">
                      {entry.highlight}
                    </p>
                  )}
                </div>

                <div className="flex-1 min-w-0 h-48 sm:h-64 lg:h-full w-full">
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
