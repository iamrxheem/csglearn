module.exports = {
  siteMetadata: {
    title: `CSG Learning Institute`,
    siteUrl: `https://www.csglearn.com`,
    description: `Learn in an interactive virtual classroom from the comfort of your home. Register for CSEC and CAPE online classes, tertiary certification and more.`,
    author: `Raheem McDonald`
  },
  plugins: [
    { resolve: `gatsby-plugin-sitemap` },
    {
      resolve: `gatsby-plugin-clicky`,
      options: {
        siteId: "101286252"
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CSG Learning`,
        short_name: `CSG Learning`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
