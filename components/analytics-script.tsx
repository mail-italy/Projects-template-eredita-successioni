export function AnalyticsScript() {
  const bootstrap = `
    window.dataLayer = window.dataLayer || [];
  `;

  return <script dangerouslySetInnerHTML={{ __html: bootstrap }} />;
}
