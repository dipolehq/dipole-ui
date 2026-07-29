import problemImg from '@assets/images/problem.png';
import { FlickeringGrid } from '@components/effects/FlickeringGrid';

/**
 * Problem statement section — contrasts solved human identity against
 * unmanaged machine identity.
 */
export function Problem() {
  return (
    <section className="relative w-full py-16 bg-[#0b0d0e] overflow-hidden">
      {/* Flickering grid backdrop — sits behind the content. */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid theme="onDark" />
      </div>

      <div className="relative z-10 w-full px-[2.5%]">
        {/* Heading + text on the left */}
        <h2 className="m-0 mb-6 text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.2] text-white tracking-[-0.02em]">
          Identity for Humans Exists. Identity for Machines Doesn't.
        </h2>

        <div className="w-2/3 mb-16">
          <p className="m-0 mb-4 text-[0.92rem] font-light leading-[1.75] text-white/55 text-left">
            The left side is a solved problem. Every employee login is verified, enforced by policy, and recorded for audit.
          </p>
          <p className="m-0 mb-4 text-[0.92rem] font-light leading-[1.75] text-white/55 text-left">
            The right side is a ticking time bomb. Thousands of API keys and tokens scattered across vaults, env vars, and config files with no identity attached, no expiry set, and no way to know who used them or when they leaked.
          </p>
          <p className="m-0 mb-4 text-[0.92rem] font-light leading-[1.75] text-white/55 text-left">
            These credentials were never meant to be identity. They are shared, long-lived, and invisible to your security stack. When one leaks, you cannot revoke it without breaking everything that depends on it. And they leak constantly.
          </p>
          <p className="m-0 text-[0.92rem] font-normal leading-[1.75] text-white/85 text-left">
            Your agents and workloads need what your employees already have: verified identity, enforced policy, and complete attribution. Not better secret management. No secrets at all.
          </p>
        </div>

        {/* Problem image. The gap here was sized to clear the mesh render that
            used to sit on the right; without it the diagram sits closer to the
            copy. */}
        <div className="mt-8">
          <img
            className="block w-[93%] h-auto mx-auto pointer-events-none select-none"
            src={problemImg}
            alt="Human vs Agent access management"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
