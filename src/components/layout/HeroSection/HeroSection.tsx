import heroSectionImg from '@assets/hero_section_dotted.png';

/**
 * Hero section — full-width image that fills the viewport below the navbar
 * without requiring any scroll.
 */
export function HeroSection() {
  return (
    <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
      <img
        className="w-full h-full object-cover block pointer-events-none select-none"
        style={{ objectPosition: 'center 47%' }}
        src={heroSectionImg}
        alt="Dipole — Manage Identity, Not Static Credentials"
        draggable={false}
      />
    </div>
  );
}
