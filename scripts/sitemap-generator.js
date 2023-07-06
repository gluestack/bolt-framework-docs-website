const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const { renderToHTML } = require("next/server");
const { getAllPages } = require("next/dist/next-server/server/get-page-files");

async function generateSitemap() {
  const sitemapStream = new SitemapStream({
    hostname: "https://bolt.gluestack.io", // Replace with your website's hostname
  });

  const pages = await getAllPages();

  // Add URLs to the sitemap
  pages.forEach((page) => {
    const url = page.endsWith("/index")
      ? page.slice(0, -6) // Remove "/index" from the end of the URL
      : page;
    sitemapStream.write({ url });
  });

  sitemapStream.end();

  const sitemapData = await streamToPromise(Readable.from(sitemapStream));

  fs.writeFileSync("./public/sitemap.xml", sitemapData);

  console.log("Sitemap generated successfully!");
}

generateSitemap();
