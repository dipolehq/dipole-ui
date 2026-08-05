import crossIcon from '@assets/icons/cross.svg';
import tickIcon from '@assets/icons/tick.svg';

/**
 * The five capabilities human IAM already provides — and that agent access
 * lacks. Shown on both sides of the comparison so the contrast is like-for-like.
 */
const CAPABILITIES = [
  'Identity',
  'Multi-Factor Authentication',
  'Policy Enforcement',
  'Zero Trust / Least Privilege',
  'Audit Record Of Every Access',
];

/**
 * Whitespace baked into the top of the diagram PNGs, as a share of panel height.
 * Offsets the copy so its eyebrow lines up with the diagram's drawn top border
 * rather than the image element's edge.
 */
const DIAGRAM_TOP_INSET = 'pt-[6%]';

type Surface = 'light' | 'dark';

/** Per-surface colour tokens. Written as literals so Tailwind can see them. */
const SURFACE = {
  light: {
    eyebrow: 'text-green-700',
    intro: 'text-ink/75',
    label: 'text-ink',
    divider: 'border-ink/[0.09]',
  },
  dark: {
    eyebrow: 'text-red-400',
    intro: 'text-brand-green/75',
    label: 'text-brand-green',
    divider: 'border-brand-green/[0.09]',
  },
} as const satisfies Record<Surface, Record<string, string>>;

export interface CapabilityPanelProps {
  /** Small uppercase eyebrow, e.g. "Solved". */
  eyebrow: string;
  /** Lead paragraph beneath the eyebrow. */
  intro: string;
  /** Which surface this sits on — selects the colour set. */
  surface: Surface;
  /** `tick` for satisfied capabilities, `cross` for missing ones. */
  marker: 'tick' | 'cross';
  /**
   * Overrides the default top inset. Useful when one side's copy wraps to a
   * different number of lines and needs nudging to stay level with the other.
   */
  topInset?: string;
}

/**
 * Copy column for one side of the Problem comparison: eyebrow, lead paragraph,
 * then the capability list with tick or cross markers.
 *
 * Both sides share this component so type sizes, weights, spacing and dividers
 * stay identical and only the colours and markers differ.
 */
export function CapabilityPanel({
  eyebrow,
  intro,
  surface,
  marker,
  topInset = DIAGRAM_TOP_INSET,
}: CapabilityPanelProps) {
  const tone = SURFACE[surface];
  const icon = marker === 'tick' ? tickIcon : crossIcon;

  return (
    <div className={`w-1/2 h-full flex flex-col justify-start ${topInset} px-3 sm:px-6 lg:px-10`}>
      <span
        className={`font-mono text-[0.62rem] font-semibold tracking-[0.22em] uppercase ${tone.eyebrow}`}
      >
        {eyebrow}
      </span>

      <p className={`m-0 mt-3 mb-7 max-w-[440px] text-[0.92rem] font-normal leading-relaxed ${tone.intro}`}>
        {intro}
      </p>

      <ul className="m-0 p-0 list-none flex flex-col">
        {CAPABILITIES.map((capability) => (
          <li
            key={capability}
            className={`flex items-center gap-3.5 py-3 border-b ${tone.divider} last:border-b-0`}
          >
            <img
              src={icon}
              alt=""
              aria-hidden="true"
              className="w-[18px] h-[18px] shrink-0"
              draggable={false}
            />
            <span className={`text-[0.92rem] font-medium leading-none ${tone.label}`}>
              {capability}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
