import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { SiteLayout } from '@app/layout';
import { ROUTES } from '@app/router/routes';
import { IamForAgentsPage } from '@pages/IamForAgentsPage';
import { LandingPage } from '@pages/LandingPage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { PricingPage } from '@pages/PricingPage';

/**
 * Route tree. Paths come from `ROUTES` so they stay in sync with in-app links.
 *
 * Every route nests under `SiteLayout`, which supplies the navbar and footer.
 */
export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path={ROUTES.home} element={<LandingPage />} />
          <Route path={ROUTES.pricing} element={<PricingPage />} />
          <Route path={ROUTES.iamForAgents} element={<IamForAgentsPage />} />
          <Route path={ROUTES.notFound} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
