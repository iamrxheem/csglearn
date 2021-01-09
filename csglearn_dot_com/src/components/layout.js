/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ReactGA from "react-ga"
import Header from "./header"
import Footer from "./footer"

import "./layout.css"

import { Container } from "shards-react"
import MainMenu from "../menus/mainMenu"

const Layout = ({ children, fluid, hideFooter }) => {
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
      <MainMenu />
      <div>
        <>{children}</>
        <Footer />
      </div>
      <noscript>You need to enable Javascript to view this website.</noscript>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
