import { Link } from 'react-router-dom';

import { ROUTES } from '@app/router/routes';

export function NotFoundPage() {
  return (
    <section>
      <h1>404 — Page not found</h1>
      <Link to={ROUTES.home}>Back to home</Link>
    </section>
  );
}
