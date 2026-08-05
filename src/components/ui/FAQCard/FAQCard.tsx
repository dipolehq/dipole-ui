import { useState } from 'react';

export interface FAQCardProps {
  /** The question text. */
  question: string;
  /** The answer text. */
  answer: string;
  /** Optional className for the outer wrapper. */
  className?: string;
}

/**
 * Collapsible FAQ card. Click the question to expand/collapse the answer.
 * Uses the grid-rows trick for a smooth height transition that doesn't depend
 * on a fixed max-height value.
 */
export function FAQCard({ question, answer, className = '' }: FAQCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border-b border-ink/10 ${className}`.trim()}
    >
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 bg-transparent border-none cursor-pointer text-left"
      >
        <span className="text-[0.95rem] font-medium leading-[1.4] text-ink">
          {question}
        </span>
        <svg
          className={`w-5 h-5 shrink-0 text-ink/40 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
            isOpen ? 'rotate-180' : ''
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Grid-rows trick: 0fr collapses the row to 0 height, 1fr expands to
          content's intrinsic height. Transition is perfectly proportional
          regardless of content length. */}
      <div
        className="grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
        style={{
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="overflow-hidden">
          <p className="m-0 pb-5 text-sm font-light leading-[1.7] text-ink/60">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
