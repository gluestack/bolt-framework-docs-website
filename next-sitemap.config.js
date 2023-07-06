/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://bolt.gluestack.io",
  generateRobotsTxt: true, // (optional)
  // ...other options
};
