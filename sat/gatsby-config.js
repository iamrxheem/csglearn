module.exports = {
  siteMetadata: {
    title: `CSG Learning SAT Center`,
    description: ``,
    siteUrl: `https://www.sat.csglearn.com`,
    description: `Learn in an interactive virtual classroom from the comfort of your home. Register for online SAT classes, tertiary certification and more.`,
    author: `Raheem McDonald`
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-clicky`,
      options: {
        siteId: "101286252"
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#3273dc`,
        theme_color: `#3273dc`,
        display: `minimal-ui`,
        icon: `src/images/logo.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
