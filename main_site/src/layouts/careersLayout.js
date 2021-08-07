import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// Header and Footer
import Header from "../components/header"
import Footer from "../components/footer/footer"

// Menu
import CareersMenu from "../menus/careersMenu"

// CSS and imports
import "../assets/css/bulma-tabs.css"
import "../assets/css/bulma-icons.css"

// All imports
import ImportPage from "../components/imports/imports"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"

import { isIOS } from "react-device-detect"

class CareersLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <ImportPage />
        <CareersMenu />

        <main>{this.props.children}</main>
        <Footer />
      </>
    )
  }
}

CareersLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default CareersLayout
