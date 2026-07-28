import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@app/App';
import '@styles/global.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element "#root" not found in index.html');
}

// Save scroll position before unload so it can be restored after refresh
window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('scrollY', String(window.scrollY));
});

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Restore scroll position after React mounts and images reserve space
const savedY = sessionStorage.getItem('scrollY');
if (savedY) {
  requestAnimationFrame(() => {
    window.scrollTo(0, parseInt(savedY, 10));
  });
  sessionStorage.removeItem('scrollY');
}
