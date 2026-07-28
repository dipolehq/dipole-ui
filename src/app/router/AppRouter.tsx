import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { SiteShell } from '@app/SiteShell';
import { NotFoundPage } from '@features/not-found';
import { PricingPage } from '@features/pricing';

/**
 * Minimal route tree. Home page + catch-all 404.
 */
export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteShell />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
