import problemImg from '@assets/images/problem.svg';

/**
 * Problem statement section — contrasts solved human identity against
 * unmanaged machine identity with a single diagram.
 */
export function Problem() {
  return (
    <section className="relative w-full py-10 sm:py-16 bg-brand-green overflow-hidden">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-[2.5%]">
        <h2 className="m-0 mb-4 sm:mb-6 text-xl sm:text-2xl lg:text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-tight text-white tracking-tight">
          Identity for Humans Exists. Identity for Machines Doesn't.
        </h2>

        <div className="w-full lg:w-2/3 mb-6 sm:mb-8">
          <p className="m-0 text-sm sm:text-[0.92rem] font-normal leading-relaxed text-white/85 text-left">
            Your agents and workloads need what your employees already have: verified identity, enforced policy, and complete attribution. Not better secret management. No secrets at all.
          </p>
        </div>

        <img
          src={problemImg}
          alt="Human identity is solved. Agent identity is not."
          width={1967}
          height={636}
          className="block w-full h-auto aspect-[1967/636] object-contain"
          draggable={false}
        />
      </div>
    </section>
  );
}
