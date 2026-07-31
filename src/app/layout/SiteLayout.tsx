import { Outlet } from 'react-router-dom';

import { Footer } from '@components/layout/Footer';
import { Navbar } from '@components/layout/Navbar';

/**
 * Shared chrome for every route: fixed navbar above, page content in the middle,
 * footer below.
 *
 * Used as a layout route so the navbar and footer are declared once instead of
 * being repeated in each page — which is how the footer previously ended up on
 * the landing page only.
 */
export function SiteLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
