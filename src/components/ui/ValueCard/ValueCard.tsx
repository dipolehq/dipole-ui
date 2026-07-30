import type { ReactNode } from 'react';

export interface ValueCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

/**
 * Reusable card component for displaying a value proposition.
 * Off-white background with an optional icon/logo at the top.
 */
export function ValueCard({ title, description, icon }: ValueCardProps) {
  return (
    <div className="flex flex-col h-full p-8 bg-[#FFFFFF] rounded-2xl opacity-100">
      {icon && (
        <div className="flex items-center justify-center w-12 h-12 min-h-12 mb-4 pointer-events-none select-none">
          {icon}
        </div>
      )}
      <h3 className="m-0 mb-3 text-[1.1rem] font-semibold text-[#0b0d0e] leading-[1.3]">
        {title}
      </h3>
      <p className="m-0 text-[0.88rem] font-light leading-[1.6] text-[#0b0d0e]/60">
        {description}
      </p>
    </div>
  );
}
