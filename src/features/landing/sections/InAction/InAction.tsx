/**
 * "Ready to Get Started" CTA section — closes out the landing page.
 */
export function InAction() {
  return (
    <section className="relative w-full py-16 bg-[#f9f7f3]">
      <div className="relative z-10 w-full max-w-full mx-auto px-[2.5%]">
        <h2 className="m-0 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] text-[#0b0d0e] tracking-[-0.02em]">
          Ready to Get Started?
        </h2>

        <p className="m-0 mt-5 max-w-[680px] text-[0.95rem] font-light leading-[1.75] text-[#0b0d0e]/60">
          Legacy identity and credential management creates vulnerabilities that scale with your infrastructure. Secure every workload connection and streamline your access governance with Dipole. Start managing access the way it should have always worked.
        </p>

        <a
          href="#"
          className="inline-flex items-center mt-7 px-6 py-3 text-[0.9rem] font-medium text-white bg-[#1C3B37] rounded-lg no-underline transition-opacity duration-200 hover:opacity-85"
        >
          Talk To Team
        </a>
      </div>
    </section>
  );
}
