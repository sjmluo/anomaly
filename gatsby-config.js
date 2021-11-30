module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "demo2",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "eGkiZ0uCFSWiIuhf02hCWIuQdtaTp7xjFnFrI_vcStI",
        spaceId: "j1i7j7n6v3mr",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    'gatsby-plugin-mui-emotion',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-top-layout',
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
