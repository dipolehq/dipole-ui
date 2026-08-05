import { ReadyToStart } from '@components/common/ReadyToStart';
import { TeamBenefits } from '@components/common/TeamBenefits';
import { UseCaseCard } from '@components/ui/UseCaseCard';
import { PAGE_CONTENT } from './content';

/**
 * "Secure CI/CD Access" use case page.
 *
 * The navbar and footer come from `SiteLayout`.
 */
export function SecureCiCdPage() {
  return (
    <section className="relative w-full min-h-screen bg-[#f9f7f3] overflow-hidden">
      {/* mt-16 clears the fixed navbar; pt-10 is the heading's own breathing room. */}
      <div className="mt-16 pt-10 pb-20 px-[2.5%]">
        <h1 className="m-0 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] tracking-[-0.02em] text-[#0b0d0e]">
          {PAGE_CONTENT.hero.title}
        </h1>

        <p className="m-0 mt-5 max-w-[780px] text-[1rem] font-light leading-[1.7] text-[#0b0d0e]/65">
          {PAGE_CONTENT.hero.subtitle}
        </p>

        <img
          src={PAGE_CONTENT.hero.image}
          alt={PAGE_CONTENT.hero.imageAlt}
          width={1564}
          height={556}
          className="block w-full h-auto mt-10 aspect-[1564/556] object-contain"
          draggable={false}
        />
      </div>

      {/* Problem statement section */}
      <section className="w-full py-16 bg-[#1C3B37]">
        <div className="px-[2.5%] flex items-center gap-10">
          <div className="w-1/2 shrink-0">
            <h2 className="m-0 mb-10 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] tracking-[-0.02em] text-white whitespace-nowrap">
              {PAGE_CONTENT.problem.heading}
            </h2>

            {PAGE_CONTENT.problem.paragraphs.map((text, i) => (
              <p
                key={i}
                className={`m-0${i > 0 ? ' mt-4' : ''} text-[0.95rem] font-light leading-[1.75] text-white/60`}
              >
                {text}
              </p>
            ))}
          </div>

          <div className="flex-1 min-w-0 flex items-center justify-center">
            <img
              src={PAGE_CONTENT.problem.image}
              alt={PAGE_CONTENT.problem.imageAlt}
              className="block w-[55%] h-auto object-contain translate-y-15"
              draggable={false}
            />
          </div>
        </div>
      </section>

      {/* Solution section */}
      <section className="w-full py-16 bg-[#f9f7f3]">
        <div className="px-[2.5%]">
          <h2 className="m-0 mb-10 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] tracking-[-0.02em] text-[#0b0d0e]">
            {PAGE_CONTENT.solution.heading}
          </h2>

          <div className="flex items-start gap-10">
            <div className="w-[45%] shrink-0">
              {PAGE_CONTENT.solution.paragraphs.map((text, i) => (
                <p
                  key={i}
                  className={`m-0${i > 0 ? ' mt-4' : ''} text-[0.95rem] font-light leading-[1.75] text-[#0b0d0e]/60`}
                >
                  {text}
                </p>
              ))}
            </div>

            <div className="flex-1 min-w-0 flex items-center justify-center">
              <img
                src={PAGE_CONTENT.solution.image}
                alt={PAGE_CONTENT.solution.imageAlt}
                className="block w-full h-auto object-contain"
                draggable={false}
              />
            </div>
          </div>

          <h2 className="m-0 mt-12 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] tracking-[-0.02em] text-[#0b0d0e]">
            {PAGE_CONTENT.features.heading}
          </h2>

          <div className="mt-10 grid grid-cols-4 gap-5">
            {PAGE_CONTENT.features.cards.map((card) => (
              <UseCaseCard
                key={card.title}
                icon={<img src={card.icon} alt="" className="w-8 h-8" />}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>

      <TeamBenefits />

      <ReadyToStart />
    </section>
  );
}
