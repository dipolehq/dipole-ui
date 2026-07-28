import { useEffect } from 'react';

import { env } from '@config/env';
import { Navbar } from '@components/layout/Navbar';
import {
  Differentiators,
  Hero,
  ManagementConsole,
  Problem,
  Speedup,
  ValueProposition,
} from '@features/landing';

/**
 * Landing page. Composition only — it stacks the landing sections in scroll
 * order and owns the document title. No presentation logic lives here.
 */
export function LandingPage() {
  useEffect(() => {
    document.title = env.appName;
  }, []);

  return (
    <>
      <div className="relative w-full">
        <Navbar />
        {/* Offset the fixed navbar so the hero starts flush beneath it. */}
        <div className="mt-16">
          <Hero />
        </div>
        <Problem />
      </div>
      <ManagementConsole />
      <ValueProposition />
      <Differentiators />
      <Speedup />
    </>
  );
}
