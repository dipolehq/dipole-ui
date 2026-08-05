import { ReadyToStart } from '@components/common/ReadyToStart';
import { TeamBenefits } from '@components/common/TeamBenefits';
import { UseCaseCard } from '@components/ui/UseCaseCard';
import { PAGE_CONTENT } from './content';

/**
 * "Secure Non-Human Identities" use case page.
 *
 * Hero fills one viewport on desktop so the green section starts on scroll.
 * On mobile it stacks naturally.
 */
export function SecureNhiPage() {
  return (
    <>
      <section className="relative w-full bg-off-white overflow-hidden">
        <div className="mt-16 h-[calc(100vh-4rem)] flex flex-col px-4 sm:px-6 lg:px-8 xl:px-[2.5%] pt-8 sm:pt-10">
          <h1 className="m-0 text-2xl sm:text-3xl lg:text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-tight tracking-tight text-ink">
            {PAGE_CONTENT.hero.title}
          </h1>

          <p className="m-0 mt-4 sm:mt-5 text-sm sm:text-base font-light leading-relaxed text-ink/65">
            {PAGE_CONTENT.hero.subtitle}
          </p>

          <div className="flex-1 min-h-0 flex items-center justify-center">
            <img
              src={PAGE_CONTENT.hero.image}
              alt={PAGE_CONTENT.hero.imageAlt}
              className="block w-full sm:w-4/5 max-h-full h-auto object-contain"
              draggable={false}
            />
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="w-full py-12 sm:py-16 bg-brand-green">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-[2.5%] flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10">
          <div className="w-full lg:w-1/2 shrink-0">
            <h2 className="m-0 mb-6 sm:mb-10 text-xl sm:text-2xl lg:text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-tight tracking-tight text-white lg:whitespace-nowrap">
              {PAGE_CONTENT.problem.heading}
            </h2>

            {PAGE_CONTENT.problem.paragraphs.map((text, i) => (
              <p
                key={i}
                className={`m-0${i > 0 ? ' mt-3 sm:mt-4' : ''} text-sm sm:text-[0.95rem] font-light leading-relaxed text-white/60`}
              >
                {text}
              </p>
            ))}
          </div>

          <div className="flex-1 min-w-0 flex items-center justify-center w-full lg:w-auto">
            <img
              src={PAGE_CONTENT.problem.image}
              alt={PAGE_CONTENT.problem.imageAlt}
              className="block w-4/5 sm:w-3/5 lg:w-[55%] h-auto object-contain lg:translate-y-15"
              draggable={false}
            />
          </div>
        </div>
      </section>

      {/* Solution section */}
      <section className="w-full py-12 sm:py-16 bg-off-white">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-[2.5%]">
          <h2 className="m-0 mb-6 sm:mb-10 text-xl sm:text-2xl lg:text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-tight tracking-tight text-ink">
            {PAGE_CONTENT.solution.heading}
          </h2>

          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
            <div className="w-full lg:w-[45%] shrink-0">
              {PAGE_CONTENT.solution.paragraphs.map((text, i) => (
                <p
                  key={i}
                  className={`m-0${i > 0 ? ' mt-3 sm:mt-4' : ''} text-sm sm:text-[0.95rem] font-light leading-relaxed text-ink/60`}
                >
                  {text}
                </p>
              ))}
            </div>

            <div className="flex-1 min-w-0 flex items-center justify-center w-full lg:w-auto">
              <img
                src={PAGE_CONTENT.solution.image}
                alt={PAGE_CONTENT.solution.imageAlt}
                className="block w-full h-auto object-contain"
                draggable={false}
              />
            </div>
          </div>

          <h2 className="m-0 mt-10 sm:mt-12 text-xl sm:text-2xl lg:text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-tight tracking-tight text-ink">
            {PAGE_CONTENT.features.heading}
          </h2>

          <div className="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
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
    </>
  );
}
