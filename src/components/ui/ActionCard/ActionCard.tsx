export interface ActionCardProps {
  title: string;
  description: string;
  /** Optional image URL rendered inside the white inset area. */
  image?: string;
  className?: string;
}

/**
 * Dark card used on light sections. Sits on a white surface, so it inverts the
 * usual treatment: near-black panel with light type. Includes a white inset
 * area at the top for an optional image.
 */
export function ActionCard({ title, description, image, className = '' }: ActionCardProps) {
  return (
    <div
      className={`flex flex-col h-full p-3 bg-[#1C3B37] rounded-2xl ${className}`.trim()}
    >
      {/* Image area — white box, image fills it edge-to-edge */}
      <div className="w-full bg-[#f9f7f3] rounded-xl overflow-hidden">
        {image && (
          <img
            src={image}
            alt=""
            className="block w-full h-auto"
            draggable={false}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-5 py-6">
        <h3 className="m-0 mb-3 text-[1.15rem] font-semibold leading-[1.3] text-white">
          {title}
        </h3>
        <p className="m-0 text-[0.9rem] font-light leading-[1.65] text-white/60">
          {description}
        </p>
      </div>
    </div>
  );
}
