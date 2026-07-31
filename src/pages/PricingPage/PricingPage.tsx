import { FlickeringGrid } from '@components/effects/FlickeringGrid';

/**
 * Pricing page — white background, full viewport.
 *
 * The navbar and footer come from `SiteLayout`.
 */
export function PricingPage() {
  return (
    <section className="relative w-full h-screen bg-white overflow-hidden">
      {/* Decorative backdrop. The navbar is fixed and opaque, so it renders
          above this. */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid theme="onLight" />
      </div>
    </section>
  );
}
