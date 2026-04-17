const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;

export function AnalyticsScript() {
  const bootstrap = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_init',
      gtm_ready: ${Boolean(gtmId)},
      ga4_ready: ${Boolean(ga4Id)}
    });
  `;

  return <script dangerouslySetInnerHTML={{ __html: bootstrap }} />;
}
