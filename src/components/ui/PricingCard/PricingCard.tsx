export interface PricingCardProps {
  /** Plan tier name, e.g. "Starter", "Teams". */
  plan: string;
  /** Price display, e.g. "Free!", "$20", "Custom". */
  price: string;
  /** Optional unit displayed smaller after the price, e.g. "/agent/mo". */
  priceUnit?: string;
  /** Short description below the price. */
  description: string;
  /** CTA button label. */
  buttonText: string;
  /** Feature bullet points listed under "Includes:". */
  features: string[];
  /** Optional: highlight this card (e.g. for a recommended plan). */
  highlighted?: boolean;
  /** Optional className for the outer wrapper. */
  className?: string;
}

/**
 * Reusable pricing card. Renders plan name, price, description, a CTA button,
 * and a variable-length feature list with checkmark icons.
 */
export function PricingCard({
  plan,
  price,
  priceUnit,
  description,
  buttonText,
  features,
  highlighted = false,
  className = '',
}: PricingCardProps) {
  return (
    <div
      className={`flex flex-col h-full p-8 rounded-2xl ${
        highlighted
          ? 'bg-brand-green text-white'
          : 'bg-white text-ink'
      } ${className}`.trim()}
    >
      {/* Plan name */}
      <span
        className={`font-mono text-[0.7rem] font-medium tracking-[0.16em] uppercase ${
          highlighted ? 'text-white/50' : 'text-ink/45'
        }`}
      >
        {plan}
      </span>

      {/* Price */}
      <h3 className="m-0 mt-3 text-[2rem] font-semibold leading-tight tracking-tight">
        {price}
        {priceUnit && (
          <span className="text-sm font-normal tracking-normal">{priceUnit}</span>
        )}
      </h3>

      {/* Description */}
      <p
        className={`m-0 mt-3 text-[0.88rem] font-light leading-relaxed ${
          highlighted ? 'text-white/60' : 'text-ink/55'
        }`}
      >
        {description}
      </p>

      {/* CTA Button */}
      <button
        type="button"
        className={`mt-7 w-full inline-flex items-center justify-center h-12 px-6 text-sm font-medium rounded-lg cursor-pointer border-none transition-opacity duration-200 hover:opacity-85 ${
          highlighted
            ? 'bg-white text-brand-green'
            : 'bg-brand-green text-white'
        }`}
      >
        {buttonText}
      </button>

      {/* Features */}
      <div className="mt-8">
        <span
          className={`text-[0.82rem] font-semibold ${
            highlighted ? 'text-white/80' : 'text-ink/80'
          }`}
        >
          Includes:
        </span>

        <ul className="m-0 mt-4 p-0 list-none flex flex-col gap-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              {/* Green checkmark */}
              <svg
                className="w-[18px] h-[18px] shrink-0 mt-[1px] text-green-500"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
                <path
                  d="M8 12.5l2.5 2.5L16 9.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className={`text-[0.88rem] font-normal leading-[1.5] ${
                  highlighted ? 'text-white/80' : 'text-ink/75'
                }`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
