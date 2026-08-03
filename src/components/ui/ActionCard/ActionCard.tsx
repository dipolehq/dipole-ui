export interface ActionCardProps {
  title: string;
  description: string;
  className?: string;
}

/**
 * Dark card used on light sections. Sits on a white surface, so it inverts the
 * usual treatment: near-black panel with light type.
 */
export function ActionCard({ title, description, className = '' }: ActionCardProps) {
  return (
    <div
      className={`flex flex-col h-full p-8 bg-[#1C3B37] rounded-2xl ${className}`.trim()}
    >
      <h3 className="m-0 mb-3 text-[1.15rem] font-semibold leading-[1.3] text-white">
        {title}
      </h3>
      <p className="m-0 text-[0.9rem] font-light leading-[1.65] text-white/60">
        {description}
      </p>
    </div>
  );
}
