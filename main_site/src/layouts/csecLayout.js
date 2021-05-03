import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// Header and Footer
import Header from "../components/header"
import Footer from "../components/footer/footer"

// Menu
import CSECMenu from "../menus/csecMenu"

// CSS and imports
import "../assets/css/bulma-tabs.css"
import "../assets/css/bulma-icons.css"

import StudentImage from "../images/young-student.jpg"
import CsecMiniMenu from "../components/miniMenus/csecMiniMenu"

// All imports
import ImportPage from "../components/imports/imports"

// View Components
import MobileView from "../common/mobileView"

class CSECLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <ImportPage />
        <CSECMenu enroll={this.props.enroll} />
        <MobileView>
          <img src={StudentImage} style={{ width: "100%" }} />
          <CsecMiniMenu />
        </MobileView>
        <main>{this.props.children}</main>
        <Footer />
      </>
    )
  }
}

CSECLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default CSECLayout
