import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { HubPageTemplate } from "@/components/sections";
import { articles, getHub, getService, hubPages } from "@/lib/content";
import {
  breadcrumbSchema,
  buildMetadata,
  collectionSchema,
  faqSchema,
} from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return hubPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const hub = getHub(slug);

  if (!hub) {
    return {};
  }

  return buildMetadata({
    title: hub.title,
    description: hub.description,
    path: `/hub/${hub.slug}`,
  });
}

export default async function HubPage({ params }: Props) {
  const { slug } = await params;
  const hub = getHub(slug);

  if (!hub) {
    notFound();
  }

  const relatedArticles = articles.filter((article) =>
    hub.featuredArticles.includes(article.slug),
  );
  const relatedServices = hub.connectedServices
    .map((serviceSlug) => getService(serviceSlug))
    .filter((value): value is NonNullable<typeof value> => Boolean(value));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Homepage", path: "/" },
            { name: "Aree", path: "/hub" },
            { name: hub.title, path: `/hub/${hub.slug}` },
          ]),
          collectionSchema(hub),
          faqSchema(hub.faq),
        ]}
      />
      <HubPageTemplate
        hub={hub}
        relatedArticles={relatedArticles}
        relatedServices={relatedServices}
      />
    </>
  );
}
