import accessPolicyImg from '@assets/images/access_policy.webp';

/**
 * Management console section — narrative copy on the left, a screenshot of the
 * access policy console on the right.
 * Mobile: stacks vertically (text above, image below).
 * Desktop: side-by-side 30/70 split.
 */
export function ManagementConsole() {
  return (
    <section className="relative w-full py-10 sm:py-12 bg-off-white">
      <div className="relative z-10 w-full">
        <h2 className="m-0 mb-8 sm:mb-10 px-4 sm:px-6 lg:px-8 xl:px-[2.5%] text-xl sm:text-2xl lg:text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-tight text-ink tracking-tight">
          Dipole is the management console you need.
        </h2>

        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
          <div className="w-full lg:w-[30%] shrink-0 px-4 sm:px-6 lg:pl-[2.5%] lg:pr-0">
            <p className="m-0 mb-4 sm:mb-5 text-sm sm:text-[0.92rem] font-light leading-relaxed text-ink/55 text-left">
              Dipole gives you a single place to define which workloads and agents can
              access which services, how they prove their identity, under what conditions
              access is allowed, and what credentials they receive. All from one console.
            </p>
            <p className="m-0 mb-4 sm:mb-5 text-sm sm:text-[0.92rem] font-light leading-relaxed text-ink/55 text-left">
              No more scattered secrets with no owner. No more guessing which service
              account talks to which database. Every identity is registered, every access
              decision is governed by policy, and every action is fully attributed and
              auditable.
            </p>
            <p className="m-0 mb-4 text-sm sm:text-[0.92rem] font-normal leading-relaxed text-ink/85 text-left">
              When you need to revoke access, you change a policy. Not a secret. Nothing
              else breaks.
            </p>
            <a
              href="#"
              className="inline-flex items-center mt-4 px-5 sm:px-6 py-3 text-sm font-medium text-white bg-brand-green rounded-lg no-underline transition-opacity duration-200 hover:opacity-80"
            >
              See How It Works
            </a>
          </div>

          <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-0 lg:pr-[2.5%]">
            <img
              className="block w-full h-auto aspect-[1536/650] pointer-events-none select-none"
              src={accessPolicyImg}
              alt="Dipole access policy console"
              width="1536"
              height="650"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
