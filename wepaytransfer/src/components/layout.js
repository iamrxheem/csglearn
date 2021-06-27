/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import { Helmet } from "react-helmet"

// CSS
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <script
          src="https://www.paypal.com/sdk/js?client-id=AWSNp5vB92XLnyeNLore9vTj7iXOhe9td45d_wJomi0Au1tv94zAM0RN5yLAQt6iNCqoJQpOLNlYffwC&currency=USD"
          data-sdk-integration-source="button-factory"
        />
        <script
          src="https://kit.fontawesome.com/3b83e0293b.js"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800"
          rel="stylesheet"
        />
        <link
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/argon-design-system-react@1.1.0/src/assets/css/argon-design-system-react.css"
          rel="stylesheet"
        />
      </Helmet>

      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div style={{}}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
