import { AppProviders } from '@app/providers/AppProviders';
import { AppRouter } from '@app/router/AppRouter';

/**
 * Application root. Responsible only for composition: it wires global
 * providers around the router. Keep business logic out of here.
 */
export function App() {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
}
