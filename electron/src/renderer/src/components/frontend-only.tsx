import { useTranslation } from 'react-i18next';

export function FrontendOnly() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-6 text-foreground">
      <section className="w-full max-w-lg rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <h1 className="font-serif text-3xl font-semibold tracking-tight">VoiceStudio</h1>
        <p className="mt-3 text-sm text-muted-foreground">{t('tts_errors.backend_unreachable')}</p>
      </section>
    </main>
  );
}
