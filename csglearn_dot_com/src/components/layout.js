/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import ImportPage from "./import"
import "./layout.css"

import MainMenu from "../menus/mainMenu"

const Layout = ({ children }) => {

  return (
    <>
      <MainMenu />
      <ImportPage />
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
