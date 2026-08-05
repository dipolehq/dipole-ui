import heroImg from '@assets/images/hero.png';

/**
 * Hero section — heading and subheading above, hero image pinned to the bottom.
 * Mobile: stacks naturally, no forced viewport height.
 * Desktop: fills viewport below navbar.
 */
export function Hero() {
  return (
    <section className="relative w-full min-h-[60vh] lg:h-[calc(100vh-4rem)] bg-off-white overflow-hidden flex flex-col">
      {/* Heading area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-10 sm:pt-16 px-4 sm:px-6 lg:px-8 xl:px-[2.5%]">
        <h1 className="m-0 text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2.5rem,5.5vw,4.5rem)] font-light leading-[1.1] tracking-[-0.03em] text-ink text-center">
          Manage Identities, Not Credentials
        </h1>
        <p className="m-0 mt-4 sm:mt-5 text-sm sm:text-base lg:text-[1.05rem] font-light leading-relaxed text-ink/55 text-center">
          Dipole is a centralized and secretless identity & access management for agents and workloads.
        </p>
      </div>

      {/* Hero image pinned to the bottom */}
      <img
        src={heroImg}
        alt=""
        width={3842}
        height={1621}
        draggable={false}
        className="relative z-10 block w-full h-auto aspect-[3842/1621] pointer-events-none select-none"
      />
    </section>
  );
}
