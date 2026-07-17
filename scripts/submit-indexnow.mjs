const siteUrl = "https://mariaschnee-pflege.de";
const key = "a7d4c9e1f6b2480d9c3a5e7b1f0426ad";

const sitemapResponse = await fetch(`${siteUrl}/sitemap.xml`);

if (!sitemapResponse.ok) {
  throw new Error(`Sitemap konnte nicht geladen werden: ${sitemapResponse.status}`);
}

const sitemap = await sitemapResponse.text();
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);

if (urlList.length === 0) {
  throw new Error("Die Sitemap enthält keine URLs.");
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(siteUrl).host,
    key,
    keyLocation: `${siteUrl}/${key}.txt`,
    urlList,
  }),
});

if (!response.ok) {
  throw new Error(`IndexNow-Anmeldung fehlgeschlagen: ${response.status} ${await response.text()}`);
}

console.log(`${urlList.length} URLs erfolgreich an IndexNow übermittelt.`);
