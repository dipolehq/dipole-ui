import accessPolicyImg from '@assets/images/access_policy.webp';

/**
 * Management console section — narrative copy on the left, a screenshot of the
 * access policy console on the right.
 */
export function ManagementConsole() {
  return (
    <section className="relative w-full py-12 bg-white">
      <div className="w-full max-w-full mx-auto">
        <h2 className="m-0 mb-10 px-[2.5%] text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.2] text-[#0b0d0e] tracking-[-0.02em]">
          Dipole is the management console you need.
        </h2>

        <div className="flex items-start gap-8">
          <div className="w-[30%] shrink-0 pl-[2.5%]">
            <p className="m-0 mb-5 text-[0.92rem] font-light leading-[1.75] text-[#0b0d0e]/55 text-left">
              Dipole gives you a single place to define which workloads and agents can
              access which services, how they prove their identity, under what conditions
              access is allowed, and what credentials they receive. All from one console.
            </p>
            <p className="m-0 mb-5 text-[0.92rem] font-light leading-[1.75] text-[#0b0d0e]/55 text-left">
              No more scattered secrets with no owner. No more guessing which service
              account talks to which database. Every identity is registered, every access
              decision is governed by policy, and every action is fully attributed and
              auditable.
            </p>
            <p className="m-0 mb-4 text-[0.92rem] font-normal leading-[1.75] text-[#0b0d0e]/85 text-left">
              When you need to revoke access, you change a policy. Not a secret. Nothing
              else breaks.
            </p>
            <a
              href="#"
              className="inline-flex items-center mt-4 px-6 py-3 text-[0.9rem] font-medium text-white bg-[#0b0d0e] rounded-lg no-underline transition-opacity duration-200 hover:opacity-80"
            >
              See How It Works
            </a>
          </div>

          <div className="flex-1 min-w-0 pr-[2.5%]">
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
