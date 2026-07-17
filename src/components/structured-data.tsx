import { services, site } from "@/lib/site-data";

const organizationId = `${site.url}/#organization`;
const businessId = `${site.url}/#medical-business`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: site.name,
      alternateName: site.shortName,
      legalName: site.name,
      url: site.url,
      sameAs: ["https://pflegedienst-mariaschnee.de/"],
      logo: { "@type": "ImageObject", url: `${site.url}/maria-schnee-logo.png` },
      email: site.email,
      telephone: site.phone,
      foundingDate: site.founded,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Kundenservice und Pflegeberatung",
        telephone: site.phone,
        email: site.email,
        areaServed: "DE",
        availableLanguage: ["de"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: site.street,
        postalCode: site.postalCode,
        addressLocality: site.city,
        addressCountry: "DE",
      },
    },
    {
      "@type": ["MedicalBusiness", "LocalBusiness"],
      "@id": businessId,
      name: site.name,
      url: site.url,
      image: `${site.url}/maria-schnee-logo.png`,
      parentOrganization: { "@id": organizationId },
      telephone: site.phone,
      email: site.email,
      description: "Ambulanter Pflegedienst und außerklinischer Intensivpflegedienst in Waldkraiburg.",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.street,
        postalCode: site.postalCode,
        addressLocality: site.city,
        addressRegion: "Bayern",
        addressCountry: "DE",
      },
      areaServed: ["Waldkraiburg", "Landkreis Mühldorf am Inn", "Bayern"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Pflegeleistungen",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            url: `${site.url}${service.href}`,
            provider: { "@id": businessId },
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: "Maria Schnee Pflegedienst",
      inLanguage: "de-DE",
      publisher: { "@id": organizationId },
    },
  ],
};

export function GlobalStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c") }}
    />
  );
}
