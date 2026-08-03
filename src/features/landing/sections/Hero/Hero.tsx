import heroImg from '@assets/images/hero.png';

/**
 * Hero section — heading and subheading above, hero image pinned to the bottom.
 */
export function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-4rem)] bg-[#f9f7f3] overflow-hidden flex flex-col">
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
      {/* width/height are the PNG's intrinsic pixels. They are not render sizes
          (h-auto overrides that) — they give the browser the aspect ratio so it
          reserves the correct height before the image downloads. Without them
          the box collapses to the 150px default and the copy above visibly
          jumps when the image finally lands. */}
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
