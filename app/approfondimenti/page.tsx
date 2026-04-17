import { ArticleGrid, ContactSection } from "@/components/sections";
import { JsonLd } from "@/components/json-ld";
import { articles, siteConfig } from "@/lib/content";
import { breadcrumbSchema, buildMetadata, itemListSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Archivio approfondimenti",
  description:
    "Approfondimenti su successioni, testamenti, legittima, divisione ereditaria, donazioni, mediazione e successioni internazionali.",
  path: "/approfondimenti",
});

export default function ArticlesArchivePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Homepage", path: "/" },
            { name: "Approfondimenti", path: "/approfondimenti" },
          ]),
          itemListSchema(
            "Archivio approfondimenti successori",
            articles.map((article) => ({
              name: article.title,
              url: `${siteConfig.domain}/approfondimenti/${article.slug}`,
            })),
          ),
        ]}
      />
      <section className="section">
        <div className="shell stack">
          <p className="eyebrow">Archivio approfondimenti</p>
          <h1 className="display">Approfondimenti su eredità e successioni</h1>
          <p className="lead">
            Articoli e guide pensati per aiutare a comprendere i nodi più frequenti
            del diritto successorio, con taglio chiaro, tecnico e orientato ai casi
            concreti.
          </p>
        </div>
      </section>
      <ArticleGrid articles={articles} eyebrow="Archivio" title="Tutti gli approfondimenti" />
      <ContactSection
        title="Desideri una valutazione sul tuo caso?"
        intro="Se dopo la lettura vuoi capire come applicare questi temi alla tua situazione concreta, puoi contattare lo studio direttamente da qui."
      />
    </>
  );
}
