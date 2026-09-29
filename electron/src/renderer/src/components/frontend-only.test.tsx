import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import { FrontendOnly } from './frontend-only';

vi.mock('react-i18next', () => ({ useTranslation: () => ({ t: (key: string) => key }) }));

afterEach(cleanup);

it('renders the localized backend-unavailable state', () => {
  render(<FrontendOnly />);

  expect(screen.getByRole('heading', { name: 'VoiceStudio' })).toBeInTheDocument();
  expect(screen.getByText('tts_errors.backend_unreachable')).toBeInTheDocument();
});
