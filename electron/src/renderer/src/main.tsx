import { CaptureWidget } from './features/transcriptions/capture-widget';
import { SiteBrowserHost } from './features/browser/site-browser-host';
import { installConsoleCapture } from '@shared/utils/consoleBuffer';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/inter';
import './styles/globals.css';
import './i18n';
import './hooks/use-appearance';
import { App } from './app';
import { installPreloadRecovery } from './lib/preload-recovery';
import { installGlobalErrorRecovery } from './lib/global-error-recovery';
import { FrontendOnly } from './components/frontend-only';

installConsoleCapture();
installGlobalErrorRecovery();
installPreloadRecovery();

createRoot(document.getElementById('root')!).render(
  __FRONTEND_ONLY__ ? (
    <FrontendOnly />
  ) : window.location.hash === '#/capture' ? (
    <CaptureWidget />
  ) : (
    <StrictMode>
      <SiteBrowserHost>
        <App />
      </SiteBrowserHost>
    </StrictMode>
  ),
);
