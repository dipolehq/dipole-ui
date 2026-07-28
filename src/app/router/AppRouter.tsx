import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ROUTES } from '@app/router/routes';
import { LandingPage } from '@pages/LandingPage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { PricingPage } from '@pages/PricingPage';

/**
 * Route tree. Paths come from `ROUTES` so they stay in sync with in-app links.
 */
export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<LandingPage />} />
        <Route path={ROUTES.pricing} element={<PricingPage />} />
        <Route path={ROUTES.notFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
