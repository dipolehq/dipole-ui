import type { ReactNode } from 'react';

export interface UseCaseCardProps {
  /** Icon rendered at the top of the card. */
  icon: ReactNode;
  /** Card title. */
  title: string;
  /** Card description text. */
  description: string;
  /** Optional className for the outer wrapper. */
  className?: string;
}

/**
 * Reusable use-case feature card. White rounded card with an icon at the top,
 * a bold title, and a description paragraph. Sized to fit 4 per row in a grid.
 */
export function UseCaseCard({ icon, title, description, className = '' }: UseCaseCardProps) {
  return (
    <div
      className={`flex flex-col h-full p-6 bg-white rounded-2xl ${className}`.trim()}
    >
      {/* Icon */}
      <div className="w-10 h-10 mb-5 flex items-center justify-center">
        {icon}
      </div>

      {/* Title */}
      <h3 className="m-0 mb-2 text-[0.95rem] font-semibold leading-[1.3] text-[#0b0d0e]">
        {title}
      </h3>

      {/* Description */}
      <p className="m-0 text-[0.85rem] font-light leading-[1.65] text-[#0b0d0e]/55">
        {description}
      </p>
    </div>
  );
}
