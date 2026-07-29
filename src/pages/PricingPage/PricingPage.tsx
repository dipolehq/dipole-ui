import { FlickeringGrid } from '@components/effects/FlickeringGrid';
import { Navbar } from '@components/layout/Navbar';

/**
 * Pricing page — white background, full viewport, no scroll.
 */
export function PricingPage() {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {/* Decorative backdrop. Sits behind page content; the navbar is fixed
          and opaque, so it renders above this. */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid theme="onLight" />
      </div>

      <Navbar />
    </div>
  );
}
