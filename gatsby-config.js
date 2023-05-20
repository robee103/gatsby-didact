/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/gatsby-didact",
  siteMetadata: {
    title: `gatsby-didact`,
    siteUrl: `https://www.yourdomain.tld`,
    name: "Gatsby Didact",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-transformer-remark`,
  ],
};
