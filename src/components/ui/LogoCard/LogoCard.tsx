interface LogoCardProps {
  /** URL to the logo image (SVG or PNG) */
  logo: string;
  /** Alt text for accessibility */
  alt?: string;
  /** Scale factor for the image (1 = default, 1.5 = 50% bigger, 0.8 = 20% smaller) */
  scale?: number;
}

/**
 * Rectangular logo card — fixed size container. Use `scale` to uniformly
 * resize the image while preserving its aspect ratio.
 */
export function LogoCard({ logo, alt = '', scale = 1 }: LogoCardProps) {
  return (
    <div className="flex items-center justify-center w-[102px] h-[38px] bg-white rounded-lg border border-[#e5e5e5] shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
      <img
        src={logo}
        alt={alt}
        className="max-w-none"
        style={{ transform: `scale(${scale})` }}
        draggable={false}
      />
    </div>
  );
}
