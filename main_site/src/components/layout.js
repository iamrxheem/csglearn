import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// Header and Footer
import Header from "./header"
import Footer from "./footer/footer"

// CSS and imports

import "../assets/css/bulma-tabs.css"
import "../assets/css/bulma-icons.css"

// All imports
import ImportPage from "./imports/imports"
import SiteAlert from "./siteAlert"

class Layout extends React.Component {
  render() {
    return (
      <>
        <ImportPage />
        <Header />
        <SiteAlert />
        <main>{this.props.children}</main>

        <Footer />
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout