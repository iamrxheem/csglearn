/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navigation from "./navigation"
import Footer from "./footer"
import ImportPage from "./import"

import { theme, ThemeProvider, CSSReset } from "@chakra-ui/react"

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
      <ImportPage />

      <Navigation siteTitle={data.site.siteMetadata?.title || `Title`} />

      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Navigation.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
