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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `j1i7j7n6v3mr`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`
            }
          },
          {
            resolve: `gatsby-remark-embed-gist`,
            options: {
              username: "ericfzhu",
              gistDefaultCssInclude: true,
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            }
          },
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              width: 800,
              ratio: 1.77,
              height: 400,
              related: false,
              noIframeBorder: true,
              loadingStrategy: 'lazy',
              iframeId: false,
            }
          }
        ],
      },
    },
  ],
};
