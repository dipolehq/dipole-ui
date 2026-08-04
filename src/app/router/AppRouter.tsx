import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { SiteLayout } from '@app/layout';
import { ROUTES } from '@app/router/routes';
import { IamForAgentsPage } from '@pages/IamForAgentsPage';
import { LandingPage } from '@pages/LandingPage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { PricingPage } from '@pages/PricingPage';
import { SecureAutonomousPage } from '@pages/SecureAutonomousPage';
import { SecureCiCdPage } from '@pages/SecureCiCdPage';
import { SecureMcpPage } from '@pages/SecureMcpPage';
import { SecureNhiPage } from '@pages/SecureNhiPage';

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
          <Route path={ROUTES.secureCiCd} element={<SecureCiCdPage />} />
          <Route path={ROUTES.secureMcp} element={<SecureMcpPage />} />
          <Route path={ROUTES.secureAutonomous} element={<SecureAutonomousPage />} />
          <Route path={ROUTES.secureNhi} element={<SecureNhiPage />} />
          <Route path={ROUTES.notFound} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
