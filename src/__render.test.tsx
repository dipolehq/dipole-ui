import { writeFileSync } from 'node:fs';

import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { LandingPage } from '@pages/LandingPage';

it('snapshot the landing page DOM for refactor comparison', () => {
  const { container } = render(
    <MemoryRouter>
      <LandingPage />
    </MemoryRouter>,
  );
  writeFileSync('/tmp/html_new.html', container.innerHTML);
  expect(container.innerHTML.length).toBeGreaterThan(0);
});
