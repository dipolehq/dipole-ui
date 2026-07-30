import heroImg from '@assets/images/hero.png';
import { FlickeringGrid } from '@components/effects/FlickeringGrid';

/**
 * Hero section — heading and subheading above, hero image pinned to the bottom.
 */
export function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-4rem)] bg-white overflow-hidden flex flex-col">
      {/* Flickering grid backdrop — behind the copy and the hero artwork. */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid theme="onLight" />
      </div>

      {/* Heading area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-16 px-[2.5%]">
        <h1 className="m-0 text-[clamp(2.5rem,5.5vw,4.5rem)] font-light leading-[1.1] tracking-[-0.03em] text-[#0b0d0e] text-center">
          Manage Identities, Not Credentials
        </h1>
        <p className="m-0 mt-5 text-[1.05rem] font-light leading-[1.6] text-[#0b0d0e]/55 text-center">
          Dipole is a centralized and secretless identity & access management for agents and workloads.
        </p>
      </div>

      {/* Hero image pinned to the bottom. Above the grid so the texture doesn't
          read through the ASCII artwork. */}
      <img
        src={heroImg}
        alt=""
        draggable={false}
        className="relative z-10 w-full h-auto pointer-events-none select-none"
      />
    </section>
  );
}
