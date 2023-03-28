/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://tomoya.me/',
  generateRobotsTxt: false,
  sitemapSize: 7000,
  generateIndexSitemap: false,
  transform: async (config, path) => {
    return {
      loc: path,
    };
  },
};
