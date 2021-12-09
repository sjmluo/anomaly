require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "demo",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    'gatsby-plugin-mui-emotion',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-top-layout',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `j1i7j7n6v3mr`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    }
  ],
};
