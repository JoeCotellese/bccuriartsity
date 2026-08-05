// ABOUTME: Resolves the site's absolute base URL for canonical, OG, and sitemap tags.
// ABOUTME: Netlify supplies it at build time, so the custom domain needs no code change.

// Netlify sets these on every build. URL is the site's main address and becomes
// the custom domain the moment one is attached, so nothing here changes at launch.
// DEPLOY_PRIME_URL is the deploy preview's own address, which keeps link previews
// and sitemaps self-consistent on a preview instead of pointing at production.
module.exports = function () {
  if (process.env.CONTEXT === "production") {
    return process.env.URL;
  }

  return process.env.DEPLOY_PRIME_URL || "http://localhost:18080";
};
