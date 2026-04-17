import { ContactSection, GlossaryGrid } from "@/components/sections";
import { JsonLd } from "@/components/json-ld";
import { glossaryTerms, siteConfig } from "@/lib/content";
import { breadcrumbSchema, buildMetadata, definedTermSetSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Glossario successorio",
  description:
    "Glossario successorio con termini chiave su eredità, successioni, testamenti, legittima, collazione e accettazione.",
  path: "/glossario-successorio",
});

export default function GlossaryPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Homepage", path: "/" },
            { name: "Glossario successorio", path: "/glossario-successorio" },
          ]),
          definedTermSetSchema(
            "Glossario successorio",
            glossaryTerms.map((term) => ({
              term: term.term,
              description: term.definition,
              url: `${siteConfig.domain}/glossario-successorio#${term.slug}`,
            })),
          ),
        ]}
      />
      <GlossaryGrid terms={glossaryTerms} />
      <ContactSection
        title="Hai trovato il termine, ora serve la verifica sul caso"
        intro="Il glossario aiuta a orientarsi, ma non sostituisce l’analisi giuridica dei documenti e della situazione concreta."
      />
    </>
  );
}
