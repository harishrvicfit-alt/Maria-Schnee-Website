import { LocalBusinessJsonLd, OrganizationJsonLd } from "next-seo";
import { site } from "@/lib/site-data";

export function GlobalStructuredData() {
  return <><OrganizationJsonLd type="Organization" name={site.name} url={site.url} logo={`${site.url}/maria-schnee-logo.png`} foundingDate={site.founded} email={site.email} telephone={site.phone} address={{ streetAddress: site.street, addressLocality: site.city, postalCode: site.postalCode, addressCountry: "DE" }} /><LocalBusinessJsonLd type="MedicalBusiness" name={site.name} url={site.url} image={`${site.url}/maria-schnee-logo.png`} telephone={site.phone} email={site.email} address={{ streetAddress: site.street, addressLocality: site.city, postalCode: site.postalCode, addressCountry: "DE" }} areaServed={["Waldkraiburg", "Landkreis Mühldorf am Inn", "Bayern"]} description="Ambulanter Pflegedienst und außerklinischer Intensivpflegedienst in Waldkraiburg." /></>;
}
