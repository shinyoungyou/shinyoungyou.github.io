
module.exports = {
  pathPrefix: "/old",

  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://shinyoungyou.github.io/old/", // Used for sitemap generation

        manifestSettings: {
          favicon: "./content/images/favicon.png", // Path is relative to the root
          siteName: "My Minimal Portfolio",
          shortName: "Portfolio",
          startUrl: "/old/", // Updated for the new location
          backgroundColor: "#FFFFFF",
          themeColor: "#000000",
          display: "minimal-ui",
        },

        contentDirectory: "./content",

        blogSettings: {
          path: "/blog", // Blog will be under /old/blog/ when prefix paths are enabled
          usePathPrefixForArticles: false, // Preserved original setting
        },

        // googleAnalytics: {
        //   trackingId: "UA-XXXXXX-X",
        //   anonymize: true,
        //   environments: ["production", "development"]
        // }
      },
    },
  ],
};
